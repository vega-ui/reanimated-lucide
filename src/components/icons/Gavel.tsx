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
const SvgGavel: React.FC<AnimatedSvgProps> = ({
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
      d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m16 16 6-6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m8 8 6-6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m9 7 8 8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m21 11-8-8" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgGavel;
