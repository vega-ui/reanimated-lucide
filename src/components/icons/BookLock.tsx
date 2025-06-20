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
const SvgBookLock: React.FC<AnimatedSvgProps> = ({
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
      d="M18 6V4a2 2 0 1 0-4 0v2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <rect x={12} y={6} width={8} height={5} rx={1} />
  </AnimatedSvg>
);
export default SvgBookLock;
