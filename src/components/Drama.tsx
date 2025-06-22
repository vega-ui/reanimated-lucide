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
const SvgDrama: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M10 11h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M14 6h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M18 6h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M6.5 13.1h.01"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M17.4 9.9c-.8.8-2 .8-2.8 0"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgDrama;
