import { Theme } from "@src/modules/render/md-converter/themes/types.ts";
import {
  ConverterFunc,
  MarkdownElement,
} from "@src/modules/render/md-converter/types/index.ts";
import { makeStyleText } from "@src/modules/render/md-converter/utils/index.ts";

export const paragraphConverter: ConverterFunc<MarkdownElement.Paragraph> = (
  styles: Theme,
  text: string,
) => {
  return `<p style="${
    makeStyleText(
      styles[MarkdownElement.Paragraph],
    )
  }">${text}</p>`;
};

export const paragraphConverterFactory = (styles: Theme) => {
  return (text: string) => paragraphConverter(styles, text);
};
