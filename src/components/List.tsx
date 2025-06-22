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
const SvgList: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M3 12h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M3 18h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M3 6h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 12h13" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 18h13" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 6h13" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgList;
