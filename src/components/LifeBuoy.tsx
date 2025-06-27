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
const SvgLifeBuoy: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedCircle cx={12} cy={12} r={10} animatedProps={animatedProps} />
    <AnimatedPath
      d="m4.93 4.93 4.24 4.24"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m14.83 9.17 4.24-4.24"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m14.83 14.83 4.24 4.24"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m9.17 14.83-4.24 4.24"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedCircle cx={12} cy={12} r={4} animatedProps={animatedProps} />
  </AnimatedSvg>
);
export default SvgLifeBuoy;
