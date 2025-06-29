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
const SvgTickets: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath
      d="m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M6 10V8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M6 14v1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M6 19v2" animatedProps={animatedProps} {...pathProps} />
    <rect x={2} y={8} width={20} height={13} rx={2} />
  </AnimatedSvg>
);
export default SvgTickets;
