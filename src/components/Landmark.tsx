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
const SvgLandmark: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M10 18v-7" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M14 18v-7" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M18 18v-7" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M3 22h18" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M6 18v-7" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgLandmark;
