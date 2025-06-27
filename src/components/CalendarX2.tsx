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
const SvgCalendarX2: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M8 2v4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M16 2v4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M3 10h18" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m17 22 5-5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m17 17 5 5" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgCalendarX2;
