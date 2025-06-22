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
const SvgUsb: React.FC<AnimatedSvgProps> = ({
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
    <circle cx={10} cy={7} r={1} />
    <circle cx={4} cy={20} r={1} />
    <AnimatedPath
      d="M4.7 19.3 19 5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m21 3-3 1 2 2Z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M9.26 7.68 5 12l2 5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m10 14 5 2 3.5-3.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m18 12 1-1 1 1-1 1Z"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgUsb;
