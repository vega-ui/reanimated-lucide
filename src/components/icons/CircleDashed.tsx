import * as React from "react";
import type { SVGProps } from "react";
import { type SvgProps } from "react-native-svg";
import { useAnimatedProps } from "react-native-reanimated";
import { AnimatedSvg, AnimatedPath } from "../../animatedFactory";
export interface AnimatedSvgProps extends SvgProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  svgProps?: Partial<React.ComponentProps<typeof AnimatedSvg>>;
  pathProps?: Partial<React.ComponentProps<typeof AnimatedPath>>;
  animatedProps?: ReturnType<typeof useAnimatedProps>;
  ref?: React.Ref<React.Component<SvgProps>>;
}
const SvgCircleDashed: React.FC<AnimatedSvgProps> = ({
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
      d="M10.1 2.182a10 10 0 0 1 3.8 0"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M13.9 21.818a10 10 0 0 1-3.8 0"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M17.609 3.721a10 10 0 0 1 2.69 2.7"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M2.182 13.9a10 10 0 0 1 0-3.8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M20.279 17.609a10 10 0 0 1-2.7 2.69"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M21.818 10.1a10 10 0 0 1 0 3.8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M3.721 6.391a10 10 0 0 1 2.7-2.69"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M6.391 20.279a10 10 0 0 1-2.69-2.7"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgCircleDashed;
