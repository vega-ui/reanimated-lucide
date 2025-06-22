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
const SvgLoaderPinwheel: React.FC<AnimatedSvgProps> = ({
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
      d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <circle cx={12} cy={12} r={10} />
  </AnimatedSvg>
);
export default SvgLoaderPinwheel;
