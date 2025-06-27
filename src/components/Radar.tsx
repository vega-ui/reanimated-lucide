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
const SvgRadar: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath
      d="M19.07 4.93A10 10 0 0 0 6.99 3.34"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M4 6h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M2.29 9.62A10 10 0 1 0 21.31 8.35"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M16.24 7.76A6 6 0 1 0 8.23 16.67"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 18h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M17.99 11.66A6 6 0 0 1 15.77 16.67"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedCircle cx={12} cy={12} r={2} animatedProps={animatedProps} />
    <AnimatedPath
      d="m13.41 10.59 5.66-5.66"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgRadar;
