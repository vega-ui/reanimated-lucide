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
const SvgBrickWallFire: React.FC<AnimatedSvgProps> = ({
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
      d="M16 3v2.107"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M3 15h5.253"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M3 9h8.228" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 15v6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 3v6" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgBrickWallFire;
