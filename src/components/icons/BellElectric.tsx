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
const SvgBellElectric: React.FC<AnimatedSvgProps> = ({
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
      d="M18.518 17.347A7 7 0 0 1 14 19"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M18.8 4A11 11 0 0 1 20 9"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M9 9h.01" animatedProps={animatedProps} {...pathProps} />
    <circle cx={20} cy={16} r={2} />
    <circle cx={9} cy={9} r={7} />
    <rect x={4} y={16} width={10} height={6} rx={2} />
  </AnimatedSvg>
);
export default SvgBellElectric;
