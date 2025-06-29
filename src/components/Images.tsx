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
const SvgImages: React.FC<AnimatedSvgProps> = ({
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
      d="M18 22H4a2 2 0 0 1-2-2V6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedCircle cx={12} cy={8} r={2} animatedProps={animatedProps} />
    <rect width={16} height={16} x={6} y={2} rx={2} />
  </AnimatedSvg>
);
export default SvgImages;
