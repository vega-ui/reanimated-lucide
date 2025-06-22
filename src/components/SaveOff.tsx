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
const SvgSaveOff: React.FC<AnimatedSvgProps> = ({
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
      d="M13 13H8a1 1 0 0 0-1 1v7"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M14 8h1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M17 21v-4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m2 2 20 20" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M29.5 11.5s5 5 4 5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgSaveOff;
