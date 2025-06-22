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
const SvgRollerCoaster: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M6 19V5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M10 19V6.8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M14 19v-7.8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M18 5v4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M18 19v-6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M22 19V9" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgRollerCoaster;
