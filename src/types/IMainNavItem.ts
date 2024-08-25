import type { IconName, RoutePath } from "@/constants";

export interface IMainNavItem {
  icon: IconName;
  label: string;
  routePath: RoutePath;
  separator: boolean;
}
