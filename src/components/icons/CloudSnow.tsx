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
const SvgCloudSnow: React.FC<AnimatedSvgProps> = ({
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
      d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M8 15h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 19h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 17h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 21h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M16 15h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M16 19h.01" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgCloudSnow;
