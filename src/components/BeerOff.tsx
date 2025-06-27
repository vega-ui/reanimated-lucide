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
const SvgBeerOff: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M13 13v5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M17 11.47V8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M17 11h1a3 3 0 0 1 2.745 4.211"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m2 2 20 20" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M9 14.6V18" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgBeerOff;
