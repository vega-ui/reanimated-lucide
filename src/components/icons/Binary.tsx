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
const SvgBinary: React.FC<AnimatedSvgProps> = ({
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
    <rect x={14} y={14} width={4} height={6} rx={2} />
    <rect x={6} y={4} width={4} height={6} rx={2} />
    <AnimatedPath d="M6 20h4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M14 10h4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M6 14h2v6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M14 4h2v6" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgBinary;
