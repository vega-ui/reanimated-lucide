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
const SvgSandwich: React.FC<AnimatedSvgProps> = ({
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
      d="m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <rect width={20} height={4} x={2} y={11} rx={1} />
  </AnimatedSvg>
);
export default SvgSandwich;
