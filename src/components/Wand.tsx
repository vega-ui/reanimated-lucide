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
const SvgWand: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M15 4V2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M15 16v-2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 9h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M20 9h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M17.8 11.8 19 13"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M15 9h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M17.8 6.2 19 5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m3 21 9-9" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M12.2 6.2 11 5"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgWand;
