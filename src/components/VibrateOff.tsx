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
const SvgVibrateOff: React.FC<AnimatedSvgProps> = ({
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
      d="m2 8 2 2-2 2 2 2-2 2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m22 8-2 2 2 2-2 2 2 2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M16 10.34V6c0-.55-.45-1-1-1h-4.34"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <line x1={2} x2={22} y1={2} y2={22} />
  </AnimatedSvg>
);
export default SvgVibrateOff;
