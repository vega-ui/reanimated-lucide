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
const SvgLogs: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M13 12h8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M13 18h8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M13 6h8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M3 12h1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M3 18h1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M3 6h1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 12h1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 18h1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 6h1" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgLogs;
