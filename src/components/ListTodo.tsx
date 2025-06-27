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
const SvgListTodo: React.FC<AnimatedSvgProps> = ({
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
    <rect x={3} y={5} width={6} height={6} rx={1} />
    <AnimatedPath
      d="m3 17 2 2 4-4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M13 6h8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M13 12h8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M13 18h8" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgListTodo;
