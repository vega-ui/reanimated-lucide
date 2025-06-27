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
const SvgBoomBox: React.FC<AnimatedSvgProps> = ({
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
      d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M8 8v1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 8v1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M16 8v1" animatedProps={animatedProps} {...pathProps} />
    <rect width={20} height={12} x={2} y={9} rx={2} />
    <AnimatedCircle cx={8} cy={15} r={2} animatedProps={animatedProps} />
    <AnimatedCircle cx={16} cy={15} r={2} animatedProps={animatedProps} />
  </AnimatedSvg>
);
export default SvgBoomBox;
