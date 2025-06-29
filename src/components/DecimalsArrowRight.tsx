import * as React from "react";
import type { SVGProps } from "react";
import { type SvgProps } from "react-native-svg";
import { useAnimatedProps } from "react-native-reanimated";
import { AnimatedSvg, AnimatedPath, AnimatedCircle } from "../animatedFactory";
export interface AnimatedSvgProps extends SvgProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  pathProps?: Partial<React.ComponentProps<typeof AnimatedPath>>;
  animatedProps?: ReturnType<typeof useAnimatedProps>;
  ref?: React.Ref<React.Component<SvgProps>>;
}
const SvgDecimalsArrowRight: React.FC<AnimatedSvgProps> = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
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
    <AnimatedPath d="M10 18h10" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m17 21 3-3-3-3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M3 11h.01" animatedProps={animatedProps} {...pathProps} />
    <rect x={15} y={3} width={5} height={8} rx={2.5} />
    <rect x={6} y={3} width={5} height={8} rx={2.5} />
  </AnimatedSvg>
);
export default SvgDecimalsArrowRight;
