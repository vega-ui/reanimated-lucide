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
const SvgEyeClosed: React.FC<AnimatedSvgProps> = ({
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
      d="m15 18-.722-3.25"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M2 8a10.645 10.645 0 0 0 20 0"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m20 15-1.726-2.05"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m4 15 1.726-2.05"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m9 18 .722-3.25"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgEyeClosed;
