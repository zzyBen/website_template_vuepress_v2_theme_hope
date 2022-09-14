import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: '/website_template_vuepress_v2_theme_hope/',
  // base: '/',
  dest: './docs',
  lang: "en-US",
  title: "Theme Demo",
  description: "A demo for vuepress-theme-hope",
  theme,
});
