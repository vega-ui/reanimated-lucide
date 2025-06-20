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
const SvgPilcrowRight: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M10 3v11" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M10 9H7a1 1 0 0 1 0-6h8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M14 3v11" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m18 14 4 4H2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m22 18-4 4" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgPilcrowRight;
