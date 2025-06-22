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
const SvgThermometerSnowflake: React.FC<AnimatedSvgProps> = ({
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
      d="m10 20-1.25-2.5L6 18"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M10 4 8.75 6.5 6 6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M10.585 15H10"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M2 12h6.5L10 9"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m4 10 1.5 2L4 14"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m7 21 3-6-1.5-3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m7 3 3 6h2" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgThermometerSnowflake;
