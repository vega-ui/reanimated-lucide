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
const SvgSiren: React.FC<AnimatedSvgProps> = ({
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
      d="M7 18v-6a5 5 0 1 1 10 0v6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M21 12h1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M18.5 4.5 18 5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M2 12h1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 2v1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m4.929 4.929.707.707"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 12v6" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgSiren;
