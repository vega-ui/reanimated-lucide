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
const SvgAlignCenterHorizontal: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M2 12h20" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgAlignCenterHorizontal;
