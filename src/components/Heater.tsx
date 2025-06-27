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
const SvgHeater: React.FC<AnimatedSvgProps> = ({
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
      d="M11 8c2-3-2-3 0-6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M15.5 8c2-3-2-3 0-6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M6 10h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M6 14h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M10 16v-4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M14 16v-4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M18 16v-4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M5 20v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M19 20v2" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgHeater;
