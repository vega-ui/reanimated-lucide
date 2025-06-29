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
const SvgShredder: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M10 22v-5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M14 19v-2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M14 2v4a2 2 0 0 0 2 2h4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M18 20v-3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M2 13h20" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M20 13V7l-5-5H6a2 2 0 0 0-2 2v9"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M6 20v-3" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgShredder;
