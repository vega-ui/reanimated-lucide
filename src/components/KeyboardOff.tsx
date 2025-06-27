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
const SvgKeyboardOff: React.FC<AnimatedSvgProps> = ({
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
      d="M 20 4 A2 2 0 0 1 22 6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M 22 6 L 22 16.41"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M 7 16 L 16 16"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M 9.69 4 L 20 4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M14 8h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M18 8h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m2 2 20 20" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M6 8h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 12h.01" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgKeyboardOff;
