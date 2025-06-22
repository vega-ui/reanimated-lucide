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
const SvgWandSparkles: React.FC<AnimatedSvgProps> = ({
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
      d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m14 7 3 3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M5 6v4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M19 14v4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M10 2v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M7 8H3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M21 16h-4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M11 3H9" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgWandSparkles;
