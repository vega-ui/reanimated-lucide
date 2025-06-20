import * as React from "react";
import type { SVGProps } from "react";
import { type SvgProps } from "react-native-svg";
import { useAnimatedProps } from "react-native-reanimated";
import { AnimatedSvg, AnimatedPath } from "../../animatedFactory";
export interface AnimatedSvgProps extends SvgProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  svgProps?: Partial<React.ComponentProps<typeof AnimatedSvg>>;
  pathProps?: Partial<React.ComponentProps<typeof AnimatedPath>>;
  animatedProps?: ReturnType<typeof useAnimatedProps>;
  ref?: React.Ref<React.Component<SvgProps>>;
}
const SvgRefreshCwOff: React.FC<AnimatedSvgProps> = ({
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
      d="M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M8 16H3v5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M3 12C3 9.51 4 7.26 5.64 5.64"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M21 12c0 1-.16 1.97-.47 2.87"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M21 3v5h-5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M22 22 2 2" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgRefreshCwOff;
