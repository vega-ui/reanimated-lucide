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
const SvgDice5: React.FC<AnimatedSvgProps> = ({
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
    <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
    <AnimatedPath d="M16 8h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 8h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 16h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M16 16h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 12h.01" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgDice5;
