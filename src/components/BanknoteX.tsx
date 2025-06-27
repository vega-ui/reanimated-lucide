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
const SvgBanknoteX: React.FC<AnimatedSvgProps> = ({
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
      d="M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m17 17 5 5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M18 12h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m22 17-5 5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M6 12h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedCircle cx={12} cy={12} r={2} animatedProps={animatedProps} />
  </AnimatedSvg>
);
export default SvgBanknoteX;
