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
const SvgAmphora: React.FC<AnimatedSvgProps> = ({
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
      d="M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M10 5H8a2 2 0 0 0 0 4h.68"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M14 5h2a2 2 0 0 1 0 4h-.68"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M18 22H6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M9 2h6" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgAmphora;
