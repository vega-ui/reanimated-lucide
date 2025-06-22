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
const SvgMegaphoneOff: React.FC<AnimatedSvgProps> = ({
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
      d="M9.26 9.26 3 11v3l14.14 3.14"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M21 15.34V6l-7.31 2.03"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M11.6 16.8a3 3 0 1 1-5.8-1.6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <line x1={2} x2={22} y1={2} y2={22} />
  </AnimatedSvg>
);
export default SvgMegaphoneOff;
