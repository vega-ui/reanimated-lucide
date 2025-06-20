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
const SvgMicrochip: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M18 12h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M18 16h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M18 20h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M18 4h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M18 8h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M4 12h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M4 16h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M4 20h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M4 4h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M4 8h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgMicrochip;
