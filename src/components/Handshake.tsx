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
const SvgHandshake: React.FC<AnimatedSvgProps> = ({
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
      d="m11 17 2 2a1 1 0 1 0 3-3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m21 3 1 11h-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M3 4h8" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgHandshake;
