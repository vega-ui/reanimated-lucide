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
const SvgShare2: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedCircle cx={18} cy={5} r={3} animatedProps={animatedProps} />
    <AnimatedCircle cx={6} cy={12} r={3} animatedProps={animatedProps} />
    <AnimatedCircle cx={18} cy={19} r={3} animatedProps={animatedProps} />
    <line x1={8.59} x2={15.42} y1={13.51} y2={17.49} />
    <line x1={15.41} x2={8.59} y1={6.51} y2={10.49} />
  </AnimatedSvg>
);
export default SvgShare2;
