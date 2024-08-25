export const ICON_NAMES = {
  Home: "house",
  Menu: "menu",
  Close: "close",
  Route: "directions",
  Settings: "settings",
} as const;

type IconNameKey = keyof typeof ICON_NAMES;

export type IconName = (typeof ICON_NAMES)[IconNameKey];
