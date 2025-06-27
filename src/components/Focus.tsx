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
const SvgFocus: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedCircle cx={12} cy={12} r={3} animatedProps={animatedProps} />
    <AnimatedPath
      d="M3 7V5a2 2 0 0 1 2-2h2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M17 3h2a2 2 0 0 1 2 2v2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M21 17v2a2 2 0 0 1-2 2h-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M7 21H5a2 2 0 0 1-2-2v-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgFocus;
