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
const SvgAlarmClockOff: React.FC<AnimatedSvgProps> = ({
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
      d="M6.87 6.87a8 8 0 1 0 11.26 11.26"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M19.9 14.25a8 8 0 0 0-9.15-9.15"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m22 6-3-3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M6.26 18.67 4 21"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m2 2 20 20" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M4 4 2 6" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgAlarmClockOff;
