import * as React from "react";
import type { SVGProps } from "react";
import { type SvgProps } from "react-native-svg";
import { useAnimatedProps } from "react-native-reanimated";
import { AnimatedSvg, AnimatedPath, AnimatedCircle } from "../animatedFactory";
export interface AnimatedSvgProps extends SvgProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  pathProps?: Partial<React.ComponentProps<typeof AnimatedPath>>;
  animatedProps?: ReturnType<typeof useAnimatedProps>;
  ref?: React.Ref<React.Component<SvgProps>>;
}
const SvgCigaretteOff: React.FC<AnimatedSvgProps> = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
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
      d="M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M18 8c0-2.5-2-2.5-2-5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m2 2 20 20" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M22 8c0-2.5-2-2.5-2-5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M7 12v4" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgCigaretteOff;
