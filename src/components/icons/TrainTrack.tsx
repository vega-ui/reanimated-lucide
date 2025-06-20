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
const SvgTrainTrack: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M2 17 17 2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m2 14 8 8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m5 11 8 8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m8 8 8 8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m11 5 8 8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m14 2 8 8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M7 22 22 7" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgTrainTrack;
