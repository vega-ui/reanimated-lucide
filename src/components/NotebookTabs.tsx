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
const SvgNotebookTabs: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M2 6h4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M2 10h4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M2 14h4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M2 18h4" animatedProps={animatedProps} {...pathProps} />
    <rect width={16} height={20} x={4} y={2} rx={2} />
    <AnimatedPath d="M15 2v20" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M15 7h5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M15 12h5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M15 17h5" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgNotebookTabs;
