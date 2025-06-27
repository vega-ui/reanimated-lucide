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
const SvgTelescope: React.FC<AnimatedSvgProps> = ({
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
      d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m13.56 11.747 4.332-.924"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m16 21-3.105-6.21"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m6.158 8.633 1.114 4.456"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m8 21 3.105-6.21"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedCircle cx={12} cy={13} r={2} animatedProps={animatedProps} />
  </AnimatedSvg>
);
export default SvgTelescope;
