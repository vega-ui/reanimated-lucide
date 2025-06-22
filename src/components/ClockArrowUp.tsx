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
const SvgClockArrowUp: React.FC<AnimatedSvgProps> = ({
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
      d="M13.228 21.925A10 10 0 1 1 21.994 12.338"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M12 6v6l1.562.781"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m14 18 4-4 4 4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M18 22v-8" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgClockArrowUp;
