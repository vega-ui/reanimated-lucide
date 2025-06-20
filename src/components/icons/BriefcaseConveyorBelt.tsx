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
const SvgBriefcaseConveyorBelt: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M10 20v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M14 20v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M18 20v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M21 20H3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M6 20v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <rect x={4} y={6} width={16} height={10} rx={2} />
  </AnimatedSvg>
);
export default SvgBriefcaseConveyorBelt;
