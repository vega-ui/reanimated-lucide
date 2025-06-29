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
const SvgSignpostBig: React.FC<AnimatedSvgProps> = ({
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
      d="M10 9H4L2 7l2-2h6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M14 5h6l2 2-2 2h-6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M10 22V4a2 2 0 1 1 4 0v18"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M8 22h8" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgSignpostBig;
