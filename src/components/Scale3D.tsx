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
const SvgScale3D: React.FC<AnimatedSvgProps> = ({
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
      d="M5 7v11a1 1 0 0 0 1 1h11"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M5.293 18.707 11 13"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedCircle cx={19} cy={19} r={2} animatedProps={animatedProps} />
    <AnimatedCircle cx={5} cy={5} r={2} animatedProps={animatedProps} />
  </AnimatedSvg>
);
export default SvgScale3D;
