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
const SvgQrCode: React.FC<AnimatedSvgProps> = ({
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
    <rect width={5} height={5} x={3} y={3} rx={1} />
    <rect width={5} height={5} x={16} y={3} rx={1} />
    <rect width={5} height={5} x={3} y={16} rx={1} />
    <AnimatedPath
      d="M21 16h-3a2 2 0 0 0-2 2v3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M21 21v.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M12 7v3a2 2 0 0 1-2 2H7"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M3 12h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 3h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 16v.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M16 12h1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M21 12v.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 21v-1" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgQrCode;
