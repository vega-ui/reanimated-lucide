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
const SvgGitFork: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedCircle cx={12} cy={18} r={3} animatedProps={animatedProps} />
    <AnimatedCircle cx={6} cy={6} r={3} animatedProps={animatedProps} />
    <AnimatedCircle cx={18} cy={6} r={3} animatedProps={animatedProps} />
    <AnimatedPath
      d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 12v3" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgGitFork;
