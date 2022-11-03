import lume from "lume/mod.ts";
import plugins from "./plugins.ts";

const site = lume({
  page404: "./404.html",
  src: "./src",
},);

site.use(plugins());

export default site;
