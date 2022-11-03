import date from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import terser from "lume/plugins/terser.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import metas from "lume/plugins/metas.ts";
import pagefind from "lume/plugins/pagefind.ts";
import sitemap from "https://raw.githubusercontent.com/lumeland/experimental-plugins/b75edba434ab80d0b9033233f6ade19c09825eb7/sitemap/sitemap.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import katex from "lume/plugins/katex.ts";

import type { Page, Site } from "lume/core.ts";

/** Configure the site */
export default function () {
  return (site: Site) => {
    site.use(postcss())
      .use(basePath())
      .use(codeHighlight())
      .use(date({
        formats: {
        "Europe": "dd-MM-yyyy",
        },
      }))
      .use(metas())
      .use(resolveUrls())
      .use(slugifyUrls())
      .use(pagefind())
      .use(terser())
      .use(sitemap())
      .use(multilanguage())
      .use(katex())
      .use(codeHighlight())
      .copy("fonts")
      .copy("favicon.png")
  };
}
