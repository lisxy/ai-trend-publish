import { Theme } from "@src/modules/render/md-converter/themes/types.ts";
import {
  ConverterFunc,
  MarkdownElement,
} from "@src/modules/render/md-converter/types/index.ts";
import { makeStyleText } from "@src/modules/render/md-converter/utils/index.ts";

export const strongConverter: ConverterFunc<MarkdownElement.Strong> = (
  styles: Theme,
  text: string,
) => {
  return `<strong style="${makeStyleText(styles.strong)}">${text}</strong>`;
};

export const strongConverterFactory = (styles: Theme) => {
  return (text: string) => strongConverter(styles, text);
};
