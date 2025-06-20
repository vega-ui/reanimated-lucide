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
const SvgTransgender: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M12 16v6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M14 20h-4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M18 2h4v4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m2 2 7.17 7.17"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M2 5.355V2h3.357"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m22 2-7.17 7.17"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M8 5 5 8" animatedProps={animatedProps} {...pathProps} />
    <circle cx={12} cy={12} r={4} />
  </AnimatedSvg>
);
export default SvgTransgender;
