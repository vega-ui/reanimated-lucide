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
const SvgVideotape: React.FC<AnimatedSvgProps> = ({
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
    <rect width={20} height={16} x={2} y={4} rx={2} />
    <AnimatedPath d="M2 8h20" animatedProps={animatedProps} {...pathProps} />
    <AnimatedCircle cx={8} cy={14} r={2} animatedProps={animatedProps} />
    <AnimatedPath d="M8 12h8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedCircle cx={16} cy={14} r={2} animatedProps={animatedProps} />
  </AnimatedSvg>
);
export default SvgVideotape;
