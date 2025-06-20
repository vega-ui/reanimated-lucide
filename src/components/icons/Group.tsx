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
const SvgGroup: React.FC<AnimatedSvgProps> = ({
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
      d="M3 7V5c0-1.1.9-2 2-2h2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M17 3h2c1.1 0 2 .9 2 2v2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M21 17v2c0 1.1-.9 2-2 2h-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M7 21H5c-1.1 0-2-.9-2-2v-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <rect width={7} height={5} x={7} y={7} rx={1} />
    <rect width={7} height={5} x={10} y={12} rx={1} />
  </AnimatedSvg>
);
export default SvgGroup;
