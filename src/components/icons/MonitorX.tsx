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
const SvgMonitorX: React.FC<AnimatedSvgProps> = ({
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
      d="m14.5 12.5-5-5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m9.5 12.5 5-5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <rect width={20} height={14} x={2} y={3} rx={2} />
    <AnimatedPath d="M12 17v4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 21h8" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgMonitorX;
