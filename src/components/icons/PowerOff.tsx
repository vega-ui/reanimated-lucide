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
const SvgPowerOff: React.FC<AnimatedSvgProps> = ({
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
      d="M18.36 6.64A9 9 0 0 1 20.77 15"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M6.16 6.16a9 9 0 1 0 12.68 12.68"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 2v4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m2 2 20 20" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgPowerOff;
