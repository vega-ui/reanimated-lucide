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
const SvgCpu: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M12 20v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 2v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M17 20v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M17 2v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M2 12h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M2 17h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M2 7h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M20 12h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M20 17h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M20 7h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M7 20v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M7 2v2" animatedProps={animatedProps} {...pathProps} />
    <rect x={4} y={4} width={16} height={16} rx={2} />
    <rect x={8} y={8} width={8} height={8} rx={1} />
  </AnimatedSvg>
);
export default SvgCpu;
