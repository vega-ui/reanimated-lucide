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
const SvgLocateFixed: React.FC<AnimatedSvgProps> = ({
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
    <line x1={2} x2={5} y1={12} y2={12} />
    <line x1={19} x2={22} y1={12} y2={12} />
    <line x1={12} x2={12} y1={2} y2={5} />
    <line x1={12} x2={12} y1={19} y2={22} />
    <AnimatedCircle cx={12} cy={12} r={7} animatedProps={animatedProps} />
    <AnimatedCircle cx={12} cy={12} r={3} animatedProps={animatedProps} />
  </AnimatedSvg>
);
export default SvgLocateFixed;
