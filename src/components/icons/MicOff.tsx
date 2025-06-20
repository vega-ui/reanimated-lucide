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
const SvgMicOff: React.FC<AnimatedSvgProps> = ({
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
    <line x1={2} x2={22} y1={2} y2={22} />
    <AnimatedPath
      d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M5 10v2a7 7 0 0 0 12 5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M15 9.34V5a3 3 0 0 0-5.68-1.33"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M9 9v3a3 3 0 0 0 5.12 2.12"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <line x1={12} x2={12} y1={19} y2={22} />
  </AnimatedSvg>
);
export default SvgMicOff;
