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
const SvgConstruction: React.FC<AnimatedSvgProps> = ({
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
    <rect x={2} y={6} width={20} height={8} rx={1} />
    <AnimatedPath d="M17 14v7" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M7 14v7" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M17 3v3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M7 3v3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M10 14 2.3 6.3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m14 6 7.7 7.7"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m8 6 8 8" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgConstruction;
