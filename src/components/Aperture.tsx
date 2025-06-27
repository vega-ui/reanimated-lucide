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
const SvgAperture: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedCircle cx={12} cy={12} r={10} animatedProps={animatedProps} />
    <AnimatedPath
      d="m14.31 8 5.74 9.94"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M9.69 8h11.48"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m7.38 12 5.74-9.94"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M9.69 16 3.95 6.06"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M14.31 16H2.83"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m16.62 12-5.74 9.94"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgAperture;
