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
const SvgAccessibility: React.FC<AnimatedSvgProps> = ({
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
    <circle cx={16} cy={4} r={1} />
    <AnimatedPath
      d="m18 19 1-7-6 1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m5 8 3-3 5.5 3-2.36 3.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M4.24 14.5a5 5 0 0 0 6.88 6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M13.76 17.5a5 5 0 0 0-6.88-6"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgAccessibility;
