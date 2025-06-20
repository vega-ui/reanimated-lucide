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
const SvgBot: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M12 8V4H8" animatedProps={animatedProps} {...pathProps} />
    <rect width={16} height={12} x={4} y={8} rx={2} />
    <AnimatedPath d="M2 14h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M20 14h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M15 13v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M9 13v2" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgBot;
