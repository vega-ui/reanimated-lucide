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
const SvgPilcrowLeft: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M14 3v11" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M14 9h-3a3 3 0 0 1 0-6h9"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M18 3v11" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M22 18H2l4-4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m6 22-4-4" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgPilcrowLeft;
