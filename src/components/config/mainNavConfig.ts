import { ICON_NAMES, ROUTE_PATHS } from "@/constants";
import { type IMainNavItem } from "@/types";

export const mainNavConfig: IMainNavItem[] = [
  {
    icon: ICON_NAMES.Home,
    label: "Home",
    routePath: ROUTE_PATHS.Home,
    separator: false,
  },
  {
    icon: ICON_NAMES.Route,
    label: "PageTwo",
    routePath: ROUTE_PATHS.PageTwo,
    separator: false,
  },
  {
    icon: ICON_NAMES.Route,
    label: "PageThree",
    routePath: ROUTE_PATHS.PageThree,
    separator: false,
  },
];
