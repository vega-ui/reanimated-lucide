import * as React from "react";
import type { SVGProps } from "react";
import { type SvgProps } from "react-native-svg";
import { useAnimatedProps } from "react-native-reanimated";
import { AnimatedSvg, AnimatedPath } from "../animatedFactory";
export interface AnimatedSvgProps extends SvgProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  svgProps?: Partial<React.ComponentProps<typeof AnimatedSvg>>;
  pathProps?: Partial<React.ComponentProps<typeof AnimatedPath>>;
  animatedProps?: ReturnType<typeof useAnimatedProps>;
  ref?: React.Ref<React.Component<SvgProps>>;
}
const SvgDoorClosedLocked: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M10 12h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M2 20h8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M20 17v-2a2 2 0 1 0-4 0v2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <rect x={14} y={17} width={8} height={5} rx={1} />
  </AnimatedSvg>
);
export default SvgDoorClosedLocked;
