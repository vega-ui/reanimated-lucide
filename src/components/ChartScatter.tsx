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
const SvgChartScatter: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedCircle
      cx={7.5}
      cy={7.5}
      r={0.5}
      fill="currentColor"
      animatedProps={animatedProps}
    />
    <AnimatedCircle
      cx={18.5}
      cy={5.5}
      r={0.5}
      fill="currentColor"
      animatedProps={animatedProps}
    />
    <AnimatedCircle
      cx={11.5}
      cy={11.5}
      r={0.5}
      fill="currentColor"
      animatedProps={animatedProps}
    />
    <AnimatedCircle
      cx={7.5}
      cy={16.5}
      r={0.5}
      fill="currentColor"
      animatedProps={animatedProps}
    />
    <AnimatedCircle
      cx={17.5}
      cy={14.5}
      r={0.5}
      fill="currentColor"
      animatedProps={animatedProps}
    />
    <AnimatedPath
      d="M3 3v16a2 2 0 0 0 2 2h16"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgChartScatter;
