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
const SvgSnowflake: React.FC<AnimatedSvgProps> = ({
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
      d="m14 20 1.25-2.5L18 18"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m14 4 1.25 2.5L18 6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m17 21-3-6h-4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m17 3-3 6 1.5 3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M2 12h6.5L10 9"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m20 10-1.5 2 1.5 2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M22 12h-6.5L14 15"
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
    <AnimatedPath d="m7 3 3 6h4" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgSnowflake;
