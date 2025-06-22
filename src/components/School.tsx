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
const SvgSchool: React.FC<AnimatedSvgProps> = ({
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
      d="M14 22v-4a2 2 0 1 0-4 0v4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M18 5v17" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M6 5v17" animatedProps={animatedProps} {...pathProps} />
    <circle cx={12} cy={9} r={2} />
  </AnimatedSvg>
);
export default SvgSchool;
