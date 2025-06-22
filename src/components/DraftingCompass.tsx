import * as React from "react";
import type { SVGProps } from "react";
import { type SvgProps } from "react-native-svg";
import { useAnimatedProps } from "react-native-reanimated";
import { AnimatedSvg, AnimatedPath } from "../animatedFactory";
export interface AnimatedSvgProps extends SvgProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  svgProps?: Partial<React.ComponentProps<typeof AnimatedSvg>>;
  pathProps?: Partial<React.ComponentProps<typeof AnimatedPath>>;
  animatedProps?: ReturnType<typeof useAnimatedProps>;
  ref?: React.Ref<React.Component<SvgProps>>;
}
const SvgDraftingCompass: React.FC<AnimatedSvgProps> = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  svgProps,
  pathProps,
  animatedProps,
  ref,
  ...props
}) => (
  <AnimatedSvg
    viewBox="0 0 24 24"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    animatedProps={animatedProps}
    ref={ref}
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    {...props}
  >
    <AnimatedPath
      d="m12.99 6.74 1.93 3.44"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M19.136 12a10 10 0 0 1-14.271 0"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m21 21-2.16-3.84"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m3 21 8.02-14.26"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <circle cx={12} cy={5} r={2} />
  </AnimatedSvg>
);
export default SvgDraftingCompass;
