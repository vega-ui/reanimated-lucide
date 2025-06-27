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
const SvgGpu: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M2 21V3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedCircle cx={16} cy={11} r={2} animatedProps={animatedProps} />
    <AnimatedCircle cx={8} cy={11} r={2} animatedProps={animatedProps} />
  </AnimatedSvg>
);
export default SvgGpu;
