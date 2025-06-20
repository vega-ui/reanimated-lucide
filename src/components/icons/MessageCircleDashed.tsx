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
const SvgMessageCircleDashed: React.FC<AnimatedSvgProps> = ({
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
      d="M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M3.5 17.5 2 22l4.5-1.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgMessageCircleDashed;
