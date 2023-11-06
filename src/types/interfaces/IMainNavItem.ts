import { IconNames, RoutePaths } from "@/types/enums";

export interface IMainNavItem {
  icon: IconNames;
  label: string;
  routePath: RoutePaths;
  separator: boolean;
}
