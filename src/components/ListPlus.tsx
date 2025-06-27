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
const SvgListPlus: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M11 12H3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M16 6H3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M16 18H3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M18 9v6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M21 12h-6" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgListPlus;
