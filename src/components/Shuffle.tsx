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
const SvgShuffle: React.FC<AnimatedSvgProps> = ({
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
      d="m18 14 4 4-4 4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m18 2 4 4-4 4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M2 6h1.972a4 4 0 0 1 3.6 2.2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgShuffle;
