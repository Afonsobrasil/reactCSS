import { StyleHelpers } from '../..';
import { CascadingStyleSheet } from '../CascadingStyleSheet';

export const styling = new Proxy({} as StyleHelpers, {
  get(_, prop: string) {
    return (value: any) =>
      new CascadingStyleSheet({ [prop]: value } as any);
  },
});