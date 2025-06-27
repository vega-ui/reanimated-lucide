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
const SvgChartNoAxesCombined: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M12 16v5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M16 14v7" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M20 10v11" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M4 18v3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 14v7" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgChartNoAxesCombined;
