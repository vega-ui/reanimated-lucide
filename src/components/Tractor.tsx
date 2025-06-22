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
const SvgTractor: React.FC<AnimatedSvgProps> = ({
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
      d="m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M16 18h-5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M18 5a1 1 0 0 0-1 1v5.573"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M3 4h8.129a1 1 0 0 1 .99.863L13 11.246"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M4 11V4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M7 15h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 10.1V4" animatedProps={animatedProps} {...pathProps} />
    <circle cx={18} cy={18} r={2} />
    <circle cx={7} cy={15} r={5} />
  </AnimatedSvg>
);
export default SvgTractor;
