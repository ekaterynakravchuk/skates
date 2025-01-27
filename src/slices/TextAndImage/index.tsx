import { Bounded } from "@/components/Bounded";
import { ButtonLink } from "@/components/ButtonLink";
import { Heading } from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `TextAndImage`.
 */
export type TextAndImageProps = SliceComponentProps<Content.TextAndImageSlice>;

/**
 * Component for "TextAndImage" Slices.
 */
const TextAndImage = ({ slice }: TextAndImageProps): React.ReactElement => {
  const theme = slice.primary.theme;
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        theme === "Blue" && "bg-texture bg-brand-blue text-white",
        theme === "Orange" && "bg-texture bg-brand-orange text-white",
        theme === "Navy" && "bg-texture bg-brand-Navy text-white",
        theme === "Lime" && "bg-texture bg-brand-lime text-white"
      )}
    >
      <Heading className="text-center ~mb-4/6" as="h2">
        <PrismicText field={slice.primary.heading} />
      </Heading>
      <div className="max-w-md text-lg leading-relaxed">
        <PrismicRichText field={slice.primary.body} />
      </div>
      <ButtonLink
        color={theme === "Lime" ? "orange" : "lime"}
        size="lg"
        field={slice.primary.button}
        className="z-20 mt-2 block"
      >
        {slice.primary.button.text}
      </ButtonLink>
      <PrismicNextImage field={slice.primary.background_image} alt="" />
      <PrismicNextImage field={slice.primary.foreground_image} alt="" />
    </Bounded>
  );
};

export default TextAndImage;
