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
const SvgCalendarRange: React.FC<AnimatedSvgProps> = ({
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
    <rect width={18} height={18} x={3} y={4} rx={2} />
    <AnimatedPath d="M16 2v4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M3 10h18" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 2v4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M17 14h-6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M13 18H7" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M7 14h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M17 18h.01" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgCalendarRange;
