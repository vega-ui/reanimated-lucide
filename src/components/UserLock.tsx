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
const SvgUserLock: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedCircle cx={10} cy={7} r={4} animatedProps={animatedProps} />
    <AnimatedPath
      d="M10.3 15H7a4 4 0 0 0-4 4v2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M15 15.5V14a2 2 0 0 1 4 0v1.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <rect width={8} height={5} x={13} y={16} rx={0.899} />
  </AnimatedSvg>
);
export default SvgUserLock;
