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
const SvgGitGraph: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedCircle cx={5} cy={6} r={3} animatedProps={animatedProps} />
    <AnimatedPath d="M5 9v6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedCircle cx={5} cy={18} r={3} animatedProps={animatedProps} />
    <AnimatedPath d="M12 3v18" animatedProps={animatedProps} {...pathProps} />
    <AnimatedCircle cx={19} cy={6} r={3} animatedProps={animatedProps} />
    <AnimatedPath
      d="M16 15.7A9 9 0 0 0 19 9"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgGitGraph;
