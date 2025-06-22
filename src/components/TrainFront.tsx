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
const SvgTrainFront: React.FC<AnimatedSvgProps> = ({
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
      d="M8 3.1V7a4 4 0 0 0 8 0V3.1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m9 15-1-1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m15 15 1-1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m8 19-2 3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m16 19 2 3" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgTrainFront;
