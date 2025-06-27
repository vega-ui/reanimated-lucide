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
const SvgCastle: React.FC<AnimatedSvgProps> = ({
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
      d="M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M18 11V4H6v7"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M22 11V9" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M2 11V9" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M6 4V2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M18 4V2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M10 4V2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M14 4V2" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgCastle;
