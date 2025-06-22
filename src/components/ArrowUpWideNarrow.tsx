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
const SvgArrowUpWideNarrow: React.FC<AnimatedSvgProps> = ({
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
      d="m3 8 4-4 4 4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M7 4v16" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M11 12h10" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M11 16h7" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M11 20h4" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgArrowUpWideNarrow;
