import * as React from "react";
import type { SVGProps } from "react";
import { type SvgProps } from "react-native-svg";
import { useAnimatedProps } from "react-native-reanimated";
import { AnimatedSvg, AnimatedPath } from "../animatedFactory";
export interface AnimatedSvgProps extends SvgProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  svgProps?: Partial<React.ComponentProps<typeof AnimatedSvg>>;
  pathProps?: Partial<React.ComponentProps<typeof AnimatedPath>>;
  animatedProps?: ReturnType<typeof useAnimatedProps>;
  ref?: React.Ref<React.Component<SvgProps>>;
}
const SvgGitBranchPlus: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M6 3v12" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M15 6a9 9 0 0 0-9 9"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M18 15v6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M21 18h-6" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgGitBranchPlus;
