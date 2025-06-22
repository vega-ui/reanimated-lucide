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
const SvgRadio: React.FC<AnimatedSvgProps> = ({
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
      d="M16.247 7.761a6 6 0 0 1 0 8.478"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M19.075 4.933a10 10 0 0 1 0 14.134"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M4.925 19.067a10 10 0 0 1 0-14.134"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M7.753 16.239a6 6 0 0 1 0-8.478"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <circle cx={12} cy={12} r={2} />
  </AnimatedSvg>
);
export default SvgRadio;
