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
const SvgKeyboard: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M10 8h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 12h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M14 8h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M16 12h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M18 8h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M6 8h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M7 16h10" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 12h.01" animatedProps={animatedProps} {...pathProps} />
    <rect width={20} height={16} x={2} y={4} rx={2} />
  </AnimatedSvg>
);
export default SvgKeyboard;
