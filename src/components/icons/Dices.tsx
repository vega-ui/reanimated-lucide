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
const SvgDices: React.FC<AnimatedSvgProps> = ({
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
    <rect width={12} height={12} x={2} y={10} rx={2} ry={2} />
    <AnimatedPath
      d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M6 18h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M10 14h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M15 6h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M18 9h.01" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgDices;
