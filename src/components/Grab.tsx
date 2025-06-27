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
const SvgGrab: React.FC<AnimatedSvgProps> = ({
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
      d="M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgGrab;
