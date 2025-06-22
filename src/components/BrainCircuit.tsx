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
const SvgBrainCircuit: React.FC<AnimatedSvgProps> = ({
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
      d="M9 13a4.5 4.5 0 0 0 3-4"
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
      d="M6 18a4 4 0 0 1-1.967-.516"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 13h4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M12 18h6a2 2 0 0 1 2 2v1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 8h8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M16 8V5a2 2 0 0 1 2-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <circle cx={16} cy={13} r={0.5} />
    <circle cx={18} cy={3} r={0.5} />
    <circle cx={20} cy={21} r={0.5} />
    <circle cx={20} cy={8} r={0.5} />
  </AnimatedSvg>
);
export default SvgBrainCircuit;
