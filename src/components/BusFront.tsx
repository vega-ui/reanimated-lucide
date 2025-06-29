import * as React from "react";
import type { SVGProps } from "react";
import { type SvgProps } from "react-native-svg";
import { useAnimatedProps } from "react-native-reanimated";
import { AnimatedSvg, AnimatedPath, AnimatedCircle } from "../animatedFactory";
export interface AnimatedSvgProps extends SvgProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  pathProps?: Partial<React.ComponentProps<typeof AnimatedPath>>;
  animatedProps?: ReturnType<typeof useAnimatedProps>;
  ref?: React.Ref<React.Component<SvgProps>>;
}
const SvgBusFront: React.FC<AnimatedSvgProps> = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
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
    <AnimatedPath d="M4 6 2 7" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M10 6h4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m22 7-2-1" animatedProps={animatedProps} {...pathProps} />
    <rect width={16} height={16} x={4} y={3} rx={2} />
    <AnimatedPath d="M4 11h16" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 15h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M16 15h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M6 19v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M18 21v-2" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgBusFront;
