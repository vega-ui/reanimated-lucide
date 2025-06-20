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
const SvgSlidersVertical: React.FC<AnimatedSvgProps> = ({
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
    <line x1={4} x2={4} y1={21} y2={14} />
    <line x1={4} x2={4} y1={10} y2={3} />
    <line x1={12} x2={12} y1={21} y2={12} />
    <line x1={12} x2={12} y1={8} y2={3} />
    <line x1={20} x2={20} y1={21} y2={16} />
    <line x1={20} x2={20} y1={12} y2={3} />
    <line x1={2} x2={6} y1={14} y2={14} />
    <line x1={10} x2={14} y1={8} y2={8} />
    <line x1={18} x2={22} y1={16} y2={16} />
  </AnimatedSvg>
);
export default SvgSlidersVertical;
