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
const SvgBugPlay: React.FC<AnimatedSvgProps> = ({
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
      d="M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M14.12 3.88 16 2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M20.97 5c0 2.1-1.6 3.8-3.5 4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M3 21c0-2.1 1.7-3.9 3.8-4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M6 13H2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M6.53 9C4.6 8.8 3 7.1 3 5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m8 2 1.88 1.88"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgBugPlay;
