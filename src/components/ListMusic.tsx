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
const SvgListMusic: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M21 15V6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 12H3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M16 6H3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 18H3" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgListMusic;
