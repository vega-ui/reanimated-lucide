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
const SvgWaypoints: React.FC<AnimatedSvgProps> = ({
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
    <circle cx={12} cy={4.5} r={2.5} />
    <AnimatedPath
      d="m10.2 6.3-3.9 3.9"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <circle cx={4.5} cy={12} r={2.5} />
    <AnimatedPath d="M7 12h10" animatedProps={animatedProps} {...pathProps} />
    <circle cx={19.5} cy={12} r={2.5} />
    <AnimatedPath
      d="m13.8 17.7 3.9-3.9"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <circle cx={12} cy={19.5} r={2.5} />
  </AnimatedSvg>
);
export default SvgWaypoints;
