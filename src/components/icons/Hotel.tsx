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
const SvgHotel: React.FC<AnimatedSvgProps> = ({
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
      d="M10 22v-6.57"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 11h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 7h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M14 15.43V22"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M15 16a5 5 0 0 0-6 0"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M16 11h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M16 7h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 11h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 7h.01" animatedProps={animatedProps} {...pathProps} />
    <rect x={4} y={2} width={16} height={20} rx={2} />
  </AnimatedSvg>
);
export default SvgHotel;
