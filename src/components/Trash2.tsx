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
const SvgTrash2: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M3 6h18" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <line x1={10} x2={10} y1={11} y2={17} />
    <line x1={14} x2={14} y1={11} y2={17} />
  </AnimatedSvg>
);
export default SvgTrash2;
