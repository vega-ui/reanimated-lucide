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
const SvgArrowDown10: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath
      d="m3 16 4 4 4-4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M7 20V4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M17 10V4h-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M15 10h4" animatedProps={animatedProps} {...pathProps} />
    <rect x={15} y={14} width={4} height={6} ry={2} />
  </AnimatedSvg>
);
export default SvgArrowDown10;
