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
const SvgChartNetwork: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath
      d="m13.11 7.664 1.78 2.672"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m14.162 12.788-3.324 1.424"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m20 4-6.06 1.515"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M3 3v16a2 2 0 0 0 2 2h16"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <circle cx={12} cy={6} r={2} />
    <circle cx={16} cy={12} r={2} />
    <circle cx={9} cy={15} r={2} />
  </AnimatedSvg>
);
export default SvgChartNetwork;
