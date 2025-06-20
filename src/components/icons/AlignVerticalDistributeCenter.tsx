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
const SvgAlignVerticalDistributeCenter: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M22 17h-3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M22 7h-5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M5 17H2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M7 7H2" animatedProps={animatedProps} {...pathProps} />
    <rect x={5} y={14} width={14} height={6} rx={2} />
    <rect x={7} y={4} width={10} height={6} rx={2} />
  </AnimatedSvg>
);
export default SvgAlignVerticalDistributeCenter;
