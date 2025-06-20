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
const SvgHardHat: React.FC<AnimatedSvgProps> = ({
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
      d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M14 6a6 6 0 0 1 6 6v3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M4 15v-3a6 6 0 0 1 6-6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <rect x={2} y={15} width={20} height={4} rx={1} />
  </AnimatedSvg>
);
export default SvgHardHat;
