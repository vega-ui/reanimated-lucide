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
const SvgBrain: React.FC<AnimatedSvgProps> = ({
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
      d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M17.599 6.5a3 3 0 0 0 .399-1.375"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M6.003 5.125A3 3 0 0 0 6.401 6.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M3.477 10.896a4 4 0 0 1 .585-.396"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M19.938 10.5a4 4 0 0 1 .585.396"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M6 18a4 4 0 0 1-1.967-.516"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M19.967 17.484A4 4 0 0 1 18 18"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgBrain;
