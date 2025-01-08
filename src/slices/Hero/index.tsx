import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import React from "react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): React.ReactElement => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-pink h-dvh overflow-hidden text-zinc-800 bg-texture"
    > 
    <Heading size="xl" className="text-zinc-800">
        <PrismicText field={slice.primary.heading} />
      </Heading>
        <PrismicRichText field={slice.primary.body} />
        <PrismicNextLink field={slice.primary.button} />
    </Bounded>
  );
};

export default Hero;
