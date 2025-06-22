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
const SvgMessageSquareDashed: React.FC<AnimatedSvgProps> = ({
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
      d="M10 17H7l-4 4v-7"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M14 17h1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M14 3h1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M19 3a2 2 0 0 1 2 2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M21 14v1a2 2 0 0 1-2 2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M21 9v1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M3 9v1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M5 3a2 2 0 0 0-2 2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M9 3h1" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgMessageSquareDashed;
