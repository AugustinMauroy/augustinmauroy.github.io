import plugins from "./plugins.ts";

import type { Site } from "lume/core.ts";

export default function () {
  return (site: Site) => {
    // Configure the site
    site.use(plugins());   
  };
}
