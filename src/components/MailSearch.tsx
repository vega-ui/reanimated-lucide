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
const SvgMailSearch: React.FC<AnimatedSvgProps> = ({
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
      d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedCircle cx={18} cy={18} r={3} animatedProps={animatedProps} />
    <AnimatedPath
      d="m22 22-1.5-1.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgMailSearch;
