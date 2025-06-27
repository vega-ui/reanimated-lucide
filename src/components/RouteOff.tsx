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
const SvgRouteOff: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedCircle cx={6} cy={19} r={3} animatedProps={animatedProps} />
    <AnimatedPath
      d="M9 19h8.5c.4 0 .9-.1 1.3-.2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m2 2 20 20" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M21 15.3a3.5 3.5 0 0 0-3.3-3.3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M15 5h-4.3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedCircle cx={18} cy={5} r={3} animatedProps={animatedProps} />
  </AnimatedSvg>
);
export default SvgRouteOff;
