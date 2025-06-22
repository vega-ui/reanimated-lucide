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
const SvgTheater: React.FC<AnimatedSvgProps> = ({
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
      d="M2 10s3-3 3-8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M22 10s-3-3-3-8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M10 2c0 4.4-3.6 8-8 8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M14 2c0 4.4 3.6 8 8 8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M2 10s2 2 2 5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M22 10s-2 2-2 5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M8 15h8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgTheater;
