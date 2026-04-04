import type { Preview } from "@storybook/nextjs";
import { IntlProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import messages from "../i18n/locales/en.json";
import "../styles/globals.css";

const preview: Preview = {
	decorators: [
		(Story, context) => {
			const theme = context.globals.theme;

			return (
				<ThemeProvider
					attribute="class"
					defaultTheme={theme}
					enableSystem={false}
					forcedTheme={theme}
					themes={["light", "dark"]}
				>
					<IntlProvider locale="en" messages={messages}>
						<Story />
					</IntlProvider>
				</ThemeProvider>
			);
		},
	],
	globalTypes: {
		theme: {
			defaultValue: "light",
			description: "Global theme for components",
			name: "Theme",
			toolbar: {
				dynamicTitle: true,
				items: ["light", "dark"],
			},
		},
	},
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		backgrounds: { disable: true },
		nextjs: {
			appDirectory: true,
		},
	},
};

export default preview;
