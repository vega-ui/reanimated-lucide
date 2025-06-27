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
const SvgDiameter: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedCircle cx={19} cy={19} r={2} animatedProps={animatedProps} />
    <AnimatedCircle cx={5} cy={5} r={2} animatedProps={animatedProps} />
    <AnimatedPath
      d="M6.48 3.66a10 10 0 0 1 13.86 13.86"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m6.41 6.41 11.18 11.18"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M3.66 6.48a10 10 0 0 0 13.86 13.86"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgDiameter;
