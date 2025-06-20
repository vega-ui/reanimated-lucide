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
const SvgLayoutList: React.FC<AnimatedSvgProps> = ({
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
    <rect width={7} height={7} x={3} y={3} rx={1} />
    <rect width={7} height={7} x={3} y={14} rx={1} />
    <AnimatedPath d="M14 4h7" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M14 9h7" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M14 15h7" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M14 20h7" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgLayoutList;
