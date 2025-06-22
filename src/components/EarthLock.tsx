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
const SvgEarthLock: React.FC<AnimatedSvgProps> = ({
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
      d="M7 3.34V5a3 3 0 0 0 3 3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M21.54 15H17a2 2 0 0 0-2 2v4.54"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M12 2a10 10 0 1 0 9.54 13"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M20 6V4a2 2 0 1 0-4 0v2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <rect width={8} height={5} x={14} y={6} rx={1} />
  </AnimatedSvg>
);
export default SvgEarthLock;
