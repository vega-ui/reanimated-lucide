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
const SvgFerrisWheel: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedCircle cx={12} cy={12} r={2} animatedProps={animatedProps} />
    <AnimatedPath d="M12 2v4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m6.8 15-3.5 2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m20.7 7-3.5 2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M6.8 9 3.3 7"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m20.7 17-3.5-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m9 22 3-8 3 8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M8 22h8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M18 18.7a9 9 0 1 0-12 0"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgFerrisWheel;
