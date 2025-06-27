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
const SvgScissorsLineDashed: React.FC<AnimatedSvgProps> = ({
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
      d="M5.42 9.42 8 12"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedCircle cx={4} cy={8} r={2} animatedProps={animatedProps} />
    <AnimatedPath
      d="m14 6-8.58 8.58"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedCircle cx={4} cy={16} r={2} animatedProps={animatedProps} />
    <AnimatedPath
      d="M10.8 14.8 14 18"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M16 12h-2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M22 12h-2" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgScissorsLineDashed;
