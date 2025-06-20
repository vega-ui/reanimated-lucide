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
const SvgBlinds: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M3 3h18" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M20 7H8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M20 11H8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M10 19h10" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 15h12" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M4 3v14" animatedProps={animatedProps} {...pathProps} />
    <circle cx={4} cy={19} r={2} />
  </AnimatedSvg>
);
export default SvgBlinds;
