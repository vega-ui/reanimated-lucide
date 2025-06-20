import * as React from "react";
import type { SVGProps } from "react";
import { type SvgProps } from "react-native-svg";
import { useAnimatedProps } from "react-native-reanimated";
import { AnimatedSvg, AnimatedPath } from "../../animatedFactory";
export interface AnimatedSvgProps extends SvgProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  svgProps?: Partial<React.ComponentProps<typeof AnimatedSvg>>;
  pathProps?: Partial<React.ComponentProps<typeof AnimatedPath>>;
  animatedProps?: ReturnType<typeof useAnimatedProps>;
  ref?: React.Ref<React.Component<SvgProps>>;
}
const SvgTableColumnsSplit: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M14 14v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M14 20v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M14 2v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M14 8v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M2 15h8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M2 9h8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M22 15h-4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M22 9h-4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M5 3v18" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgTableColumnsSplit;
