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
const SvgCalendarClock: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath
      d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M16 2v4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 2v4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M3 10h5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M17.5 17.5 16 16.3V14"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedCircle cx={16} cy={16} r={6} animatedProps={animatedProps} />
  </AnimatedSvg>
);
export default SvgCalendarClock;
