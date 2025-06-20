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
const SvgRefreshCcwDot: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M3 2v6h6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M21 12A9 9 0 0 0 6 5.3L3 8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M21 22v-6h-6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M3 12a9 9 0 0 0 15 6.7l3-2.7"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <circle cx={12} cy={12} r={1} />
  </AnimatedSvg>
);
export default SvgRefreshCcwDot;
