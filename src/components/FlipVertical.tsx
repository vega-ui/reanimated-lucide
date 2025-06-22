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
const SvgFlipVertical: React.FC<AnimatedSvgProps> = ({
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
      d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M4 12H2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M10 12H8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M16 12h-2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M22 12h-2" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgFlipVertical;
