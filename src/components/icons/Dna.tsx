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
const SvgDna: React.FC<AnimatedSvgProps> = ({
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
      d="m10 16 1.5 1.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m14 8-1.5-1.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m16.5 10.5 1 1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m17 6-2.891-2.891"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M2 15c6.667-6 13.333 0 20-6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m20 9 .891.891"
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
      d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgDna;
