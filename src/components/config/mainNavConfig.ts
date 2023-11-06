import { RoutePaths, type IMainNavItem, IconNames } from "@/types";

export const mainNavConfig: IMainNavItem[] = [
  {
    icon: IconNames.Home,
    label: "Home",
    routePath: RoutePaths.Home,
    separator: false,
  },
  {
    icon: IconNames.Route,
    label: "PageTwo",
    routePath: RoutePaths.PageTwo,
    separator: false,
  },
  {
    icon: IconNames.Route,
    label: "PageThree",
    routePath: RoutePaths.PageThree,
    separator: false,
  },
];
