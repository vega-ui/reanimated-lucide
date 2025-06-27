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
const SvgRadioTower: React.FC<AnimatedSvgProps> = ({
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
      d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedCircle cx={12} cy={9} r={2} animatedProps={animatedProps} />
    <AnimatedPath
      d="M16.2 4.8c2 2 2.26 5.11.8 7.47"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M9.5 18h5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m8 22 4-11 4 11"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgRadioTower;
