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
const SvgListOrdered: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M10 12h11" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M10 18h11" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M10 6h11" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M4 10h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M4 6h1v4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgListOrdered;
