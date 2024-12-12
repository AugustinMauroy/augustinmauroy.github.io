import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { isNodeError } from '~/utils/node';
import compileMDX from './mdx.ts';

type GetContentProps = {
  section: string;
  lang: string;
  slug?: string;
};

const BASE_CONTENT_PATH = join(process.cwd(), 'content');

export const getContent = async ({
  section,
  lang,
  slug = 'index',
}: GetContentProps): Promise<string | null> => {
  let filePath = join(BASE_CONTENT_PATH, section, `${slug}.${lang}.mdx`);

  return readFile(filePath, 'utf8').catch(() => {
    if (lang !== 'en') {
      filePath = join(BASE_CONTENT_PATH, section, `${slug}.en.mdx`);
      return readFile(filePath, 'utf8').catch(() => null);
    }

    return null;
  });
};

type GetSlugsProps = {
  section: string;
  lang?: string;
};

export const getSlugs = async ({
  section,
  lang = 'en',
}: GetSlugsProps): Promise<string[]> => {
  const dirPath = join(BASE_CONTENT_PATH, section);
  const files = await readdir(dirPath);

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
