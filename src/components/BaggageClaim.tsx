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
const SvgBaggageClaim: React.FC<AnimatedSvgProps> = ({
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
      d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <rect width={13} height={8} x={8} y={6} rx={1} />
    <circle cx={18} cy={20} r={2} />
    <circle cx={9} cy={20} r={2} />
  </AnimatedSvg>
);
export default SvgBaggageClaim;
