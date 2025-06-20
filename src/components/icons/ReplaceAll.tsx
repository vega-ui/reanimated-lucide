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
const SvgReplaceAll: React.FC<AnimatedSvgProps> = ({
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
      d="M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M14 4a2 2 0 0 1 2-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M16 10a2 2 0 0 1-2-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M20 2a2 2 0 0 1 2 2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M22 8a2 2 0 0 1-2 2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m3 7 3 3 3-3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M6 10V5a 3 3 0 0 1 3-3h1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <rect x={2} y={14} width={8} height={8} rx={2} />
  </AnimatedSvg>
);
export default SvgReplaceAll;
