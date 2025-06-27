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
const SvgMicroscope: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M6 18h8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M3 22h18" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M14 22a7 7 0 1 0 0-14h-1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M9 14h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgMicroscope;
