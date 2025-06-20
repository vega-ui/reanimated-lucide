import * as React from "react";
import type { SVGProps } from "react";
import { type SvgProps } from "react-native-svg";
import { useAnimatedProps } from "react-native-reanimated";
import { AnimatedSvg, AnimatedPath } from "../../animatedFactory";
export interface AnimatedSvgProps extends SvgProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  svgProps?: Partial<React.ComponentProps<typeof AnimatedSvg>>;
  pathProps?: Partial<React.ComponentProps<typeof AnimatedPath>>;
  animatedProps?: ReturnType<typeof useAnimatedProps>;
  ref?: React.Ref<React.Component<SvgProps>>;
}
const SvgGitPullRequestCreate: React.FC<AnimatedSvgProps> = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  svgProps,
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
    <circle cx={6} cy={6} r={3} />
    <AnimatedPath d="M6 9v12" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M13 6h3a2 2 0 0 1 2 2v3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M18 15v6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M21 18h-6" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgGitPullRequestCreate;
