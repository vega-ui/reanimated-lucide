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
const SvgPictureInPicture: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M2 10h6V4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m2 4 6 6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M21 10V7a2 2 0 0 0-2-2h-7"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M3 14v2a2 2 0 0 0 2 2h3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <rect x={12} y={14} width={10} height={7} rx={1} />
  </AnimatedSvg>
);
export default SvgPictureInPicture;
