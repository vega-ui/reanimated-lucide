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
const SvgTableRowsSplit: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M14 10h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M15 22v-8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M15 2v4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M2 10h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M20 10h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M3 19h18" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M8 10h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M9 22v-8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M9 2v4" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgTableRowsSplit;
