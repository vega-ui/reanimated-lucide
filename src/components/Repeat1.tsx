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
const SvgRepeat1: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath
      d="m17 2 4 4-4 4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M3 11v-1a4 4 0 0 1 4-4h14"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m7 22-4-4 4-4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M21 13v1a4 4 0 0 1-4 4H3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M11 10h1v4" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgRepeat1;
