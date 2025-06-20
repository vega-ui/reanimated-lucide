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
const SvgBatteryWarning: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M10 17h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M10 7v6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M22 14v-4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgBatteryWarning;
