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
const SvgFireExtinguisher: React.FC<AnimatedSvgProps> = ({
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
      d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M9 18h8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M18 3h-3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M11 3a6 6 0 0 0-6 6v11"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M5 13h4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgFireExtinguisher;
