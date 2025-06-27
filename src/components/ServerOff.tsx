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
const SvgServerOff: React.FC<AnimatedSvgProps> = ({
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
      d="M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M22 17v-1a2 2 0 0 0-2-2h-1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M6 18h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m2 2 20 20" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgServerOff;
