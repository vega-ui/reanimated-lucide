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
const SvgSunSnow: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M10 21v-1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M10 4V3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M10 9a3 3 0 0 0 0 6"
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
      d="m17 21-3-6 1.5-3H22"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m17 3-3 6 1.5 3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M2 12h1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m20 10-1.5 2 1.5 2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m3.64 18.36.7-.7"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m4.34 6.34-.7-.7"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgSunSnow;
