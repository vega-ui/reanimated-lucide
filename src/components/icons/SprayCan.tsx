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
const SvgSprayCan: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M3 3h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M7 5h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M11 7h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M3 7h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M7 9h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M3 11h.01" animatedProps={animatedProps} {...pathProps} />
    <rect width={4} height={4} x={15} y={5} />
    <AnimatedPath
      d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m13 14 8-2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m13 19 8-2" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgSprayCan;
