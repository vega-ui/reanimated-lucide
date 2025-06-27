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
const SvgSquareScissors: React.FC<AnimatedSvgProps> = ({
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
    <rect width={20} height={20} x={2} y={2} rx={2} />
    <AnimatedCircle cx={8} cy={8} r={2} animatedProps={animatedProps} />
    <AnimatedPath
      d="M9.414 9.414 12 12"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M14.8 14.8 18 18"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedCircle cx={8} cy={16} r={2} animatedProps={animatedProps} />
    <AnimatedPath
      d="m18 6-8.586 8.586"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgSquareScissors;
