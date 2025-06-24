import type { CSSProps } from './';
import { CascadingStyleSheet } from '../functions';

export type StyleHelpers = {
  [K in keyof CSSProps]: (value: CSSProps[K]) => CascadingStyleSheet;
};
