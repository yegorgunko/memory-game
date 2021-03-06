import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";
import typographyPlugin from "windicss/plugin/typography";

export default defineConfig({
  darkMode: "class",
  plugins: [formsPlugin, typographyPlugin],
});
