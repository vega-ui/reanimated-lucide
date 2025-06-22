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
const SvgCombine: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath
      d="M10 18H5a3 3 0 0 1-3-3v-1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m7 21 3-3-3-3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <rect x={14} y={14} width={8} height={8} rx={2} />
    <rect x={2} y={2} width={8} height={8} rx={2} />
  </AnimatedSvg>
);
export default SvgCombine;
