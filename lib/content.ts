import fs from 'node:fs/promises';
import path from 'node:path';
import { isNodeError } from '~/utils/node';
import compileMDX from './mdx';

type GetContentProps = {
  section: string;
  lang: string;
  slug?: string;
};

const BASE_CONTENT_PATH = path.join(process.cwd(), 'content');

export const getContent = async ({
  section,
  lang,
  slug = 'index',
}: GetContentProps): Promise<string | null> => {
  try {
    const filePath = path.join(
      BASE_CONTENT_PATH,
      section,
      `${slug}.${lang}.mdx`
    );

    return fs.readFile(filePath, 'utf8');
  } catch {
    try {
      const defaultFilePath = path.join(
        BASE_CONTENT_PATH,
        section,
        `${slug}.en.mdx`
      );

      return fs.readFile(defaultFilePath, 'utf8');
    } catch {
      return null;
    }
  }
};

type GetSlugsProps = {
  section: string;
  lang?: string;
};

export const getSlugs = async ({
  section,
  lang = 'en',
}: GetSlugsProps): Promise<string[]> => {
  const dirPath = path.join(BASE_CONTENT_PATH, section);
  const files = await fs.readdir(dirPath);

  return files
    .filter(file => file.endsWith(`.${lang}.mdx`))
    .map(file => file.replace(`.${lang}.mdx`, ''));
};

type GetFrontmatterProps = {
  section: string;
  lang: string;
  slug?: string;
};

export const getFrontmatter = async <TFrontmatter>({
  section,
  lang,
  slug,
}: GetFrontmatterProps): Promise<{
  frontmatter: TFrontmatter;
  slug: string;
}> => {
  try {
    const content = await getContent({ section, lang, slug });

    if (!content) {
      throw new Error(`Content not found for ${section}/${slug}.${lang}.mdx`);
    }

    const { frontmatter } = await compileMDX<TFrontmatter>({
      source: content,
      parseFrontmatter: true,
    });

    return { frontmatter, slug: slug || 'index' };
  } catch (error) {
    if (isNodeError(error) && error.code === 'ENOENT') {
      // File not found, try the default language
      if (lang !== 'en') {
        return getFrontmatter({ section, lang: 'en', slug });
      }
    }
    throw error;
  }
};
