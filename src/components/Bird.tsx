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
const SvgBird: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M16 7h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m20 7 2 .5-2 .5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M10 18v3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M14 17.75V21"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M7 18a6 6 0 0 0 3.84-10.61"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgBird;
