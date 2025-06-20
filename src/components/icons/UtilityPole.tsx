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
const SvgUtilityPole: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M12 2v20" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M2 5h20" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M3 3v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M7 3v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M17 3v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M21 3v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m19 5-7 7-7-7"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgUtilityPole;
