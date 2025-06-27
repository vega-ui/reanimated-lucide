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
const SvgRouter: React.FC<AnimatedSvgProps> = ({
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
    <rect width={20} height={8} x={2} y={14} rx={2} />
    <AnimatedPath d="M6.01 18H6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M10.01 18H10"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M15 10v4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M17.84 7.17a4 4 0 0 0-5.66 0"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M20.66 4.34a8 8 0 0 0-11.31 0"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgRouter;
