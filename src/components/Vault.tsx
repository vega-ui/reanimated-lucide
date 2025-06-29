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
const SvgVault: React.FC<AnimatedSvgProps> = ({
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
    <rect width={18} height={18} x={3} y={3} rx={2} />
    <AnimatedCircle
      cx={7.5}
      cy={7.5}
      r={0.5}
      fill="currentColor"
      animatedProps={animatedProps}
    />
    <AnimatedPath
      d="m7.9 7.9 2.7 2.7"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedCircle
      cx={16.5}
      cy={7.5}
      r={0.5}
      fill="currentColor"
      animatedProps={animatedProps}
    />
    <AnimatedPath
      d="m13.4 10.6 2.7-2.7"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedCircle
      cx={7.5}
      cy={16.5}
      r={0.5}
      fill="currentColor"
      animatedProps={animatedProps}
    />
    <AnimatedPath
      d="m7.9 16.1 2.7-2.7"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedCircle
      cx={16.5}
      cy={16.5}
      r={0.5}
      fill="currentColor"
      animatedProps={animatedProps}
    />
    <AnimatedPath
      d="m13.4 13.4 2.7 2.7"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedCircle cx={12} cy={12} r={2} animatedProps={animatedProps} />
  </AnimatedSvg>
);
export default SvgVault;
