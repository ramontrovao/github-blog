import "styled-components";
import { DefaultTheme } from "../styles/themes/DefaultTheme";

type ThemeType = typeof DefaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
