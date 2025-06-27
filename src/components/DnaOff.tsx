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
const SvgDnaOff: React.FC<AnimatedSvgProps> = ({
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
      d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m17 6-2.891-2.891"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M2 15c3.333-3 6.667-3 10-3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m2 2 20 20" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m20 9 .891.891"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M3.109 14.109 4 15"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m6.5 12.5 1 1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m7 18 2.891 2.891"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgDnaOff;
