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
const SvgImageUpscale: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M16 3h5v5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M17 21h2a2 2 0 0 0 2-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M21 12v3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m21 3-5 5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M3 7V5a2 2 0 0 1 2-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M9 3h3" animatedProps={animatedProps} {...pathProps} />
    <rect x={3} y={11} width={10} height={10} rx={1} />
  </AnimatedSvg>
);
export default SvgImageUpscale;
