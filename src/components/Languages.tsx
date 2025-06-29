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
const SvgLanguages: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="m5 8 6 6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m4 14 6-6 2-3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M2 5h12" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M7 2h1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m22 22-5-10-5 10"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M14 18h6" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgLanguages;
