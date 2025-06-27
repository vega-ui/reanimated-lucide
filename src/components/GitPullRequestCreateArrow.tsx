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
const SvgGitPullRequestCreateArrow: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M5 9v12" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m15 9-3-3 3-3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M12 6h5a2 2 0 0 1 2 2v3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M19 15v6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M22 18h-6" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgGitPullRequestCreateArrow;
