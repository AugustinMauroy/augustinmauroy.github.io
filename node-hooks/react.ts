import { registerHooks } from "node:module";
import { GlobalRegistrator } from "@happy-dom/global-registrator";
import * as tsxLoader from "@nodejs-loaders/tsx/tsx.loader.mjs";

// @ts-expect-error IDK
registerHooks(tsxLoader);

GlobalRegistrator.register({
	height: 1080,
	url: "http://localhost:3000",
	width: 1920,
});
