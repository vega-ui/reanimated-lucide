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
const SvgCircleDotDashed: React.FC<AnimatedSvgProps> = ({
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
      d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedCircle cx={12} cy={12} r={1} animatedProps={animatedProps} />
  </AnimatedSvg>
);
export default SvgCircleDotDashed;
