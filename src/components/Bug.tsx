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
const SvgBug: React.FC<AnimatedSvgProps> = ({
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
      d="m8 2 1.88 1.88"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M14.12 3.88 16 2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 20v-9" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M6.53 9C4.6 8.8 3 7.1 3 5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M6 13H2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M3 21c0-2.1 1.7-3.9 3.8-4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M20.97 5c0 2.1-1.6 3.8-3.5 4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M22 13h-4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M17.2 17c2.1.1 3.8 1.9 3.8 4"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgBug;
