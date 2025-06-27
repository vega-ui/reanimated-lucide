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
const SvgBedDouble: React.FC<AnimatedSvgProps> = ({
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
      d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 4v6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M2 18h20" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgBedDouble;
