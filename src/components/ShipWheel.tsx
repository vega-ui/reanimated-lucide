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
const SvgShipWheel: React.FC<AnimatedSvgProps> = ({
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
    <circle cx={12} cy={12} r={8} />
    <AnimatedPath d="M12 2v7.5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m19 5-5.23 5.23"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M22 12h-7.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m19 19-5.23-5.23"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M12 14.5V22"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M10.23 13.77 5 19"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M9.5 12H2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M10.23 10.23 5 5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <circle cx={12} cy={12} r={2.5} />
  </AnimatedSvg>
);
export default SvgShipWheel;
