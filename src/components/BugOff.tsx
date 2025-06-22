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
const SvgBugOff: React.FC<AnimatedSvgProps> = ({
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
      d="M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M14.12 3.88 16 2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M20.97 5c0 2.1-1.6 3.8-3.5 4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m2 2 20 20" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 20v-8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M6 13H2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M3 21c0-2.1 1.7-3.9 3.8-4"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgBugOff;
