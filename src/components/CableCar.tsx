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
const SvgCableCar: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M10 3h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M14 2h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m2 9 20-5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 12V6.5" animatedProps={animatedProps} {...pathProps} />
    <rect width={16} height={10} x={4} y={12} rx={3} />
    <AnimatedPath d="M9 12v5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M15 12v5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M4 17h16" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgCableCar;
