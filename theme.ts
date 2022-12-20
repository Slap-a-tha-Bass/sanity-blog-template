import { buildLegacyTheme } from "sanity";

const props = {
  "--off-white": "#f5f5f5",
  "--off-black": "#1a1a1a",
  "--brand-primary": "#f7ab0a",
  "--brand-secondary": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
  "--black": props["--off-black"],
  "--white": props["--off-white"],
  "--gray": "#666",
  "--gray-base": "#666",
  "--component-bg": props["--off-black"],
  "--component-text-color": props["--off-white"],
  "--brand-primary": props["--brand-primary"],
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--brand-primary"],
  "--main-navigation-color": props["--off-black"],
  "--main-navigation-color--inverted": props["--off-white"],
  "--focus-color": props["--brand-primary"],
});
