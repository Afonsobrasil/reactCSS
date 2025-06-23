import { CascadingStyleSheet } from "../CascadingStyleSheet";

export const styling = new Proxy({}, {
  get(_, prop: string) {
    return (value: any) => new CascadingStyleSheet({ [prop]: value });
  }
});