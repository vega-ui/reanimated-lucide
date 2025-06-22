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
const SvgRulerDimensionLine: React.FC<AnimatedSvgProps> = ({
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
      d="M12 15v-3.014"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M16 15v-3.014"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M20 6H4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M20 8V4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M4 8V4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M8 15v-3.014"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <rect x={3} y={12} width={18} height={7} rx={1} />
  </AnimatedSvg>
);
export default SvgRulerDimensionLine;
