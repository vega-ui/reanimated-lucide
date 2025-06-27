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
const SvgArrowUpAZ: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath
      d="m3 8 4-4 4 4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M7 4v16" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M20 8h-5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M15 14h5l-5 6h5"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgArrowUpAZ;
