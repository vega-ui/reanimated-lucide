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
const SvgTrainFrontTunnel: React.FC<AnimatedSvgProps> = ({
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
      d="M2 22V12a10 10 0 1 1 20 0v10"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M10 15h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M14 15h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m9 19-2 3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m15 19 2 3" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgTrainFrontTunnel;
