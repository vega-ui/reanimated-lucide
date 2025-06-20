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
const SvgBotOff: React.FC<AnimatedSvgProps> = ({
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
      d="M13.67 8H18a2 2 0 0 1 2 2v4.33"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M2 14h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M20 14h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M22 22 2 2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M9 13v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M9.67 4H12v2.33"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgBotOff;
