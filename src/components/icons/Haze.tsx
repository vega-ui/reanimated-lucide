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
const SvgHaze: React.FC<AnimatedSvgProps> = ({
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
      d="m5.2 6.2 1.4 1.4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M2 13h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M20 13h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m17.4 7.6 1.4-1.4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M22 17H2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M22 21H2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M16 13a4 4 0 0 0-8 0"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 5V2.5" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgHaze;
