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
const SvgClockArrowDown: React.FC<AnimatedSvgProps> = ({
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
      d="M12.338 21.994A10 10 0 1 1 21.925 13.227"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M12 6v6l2 1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m14 18 4 4 4-4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M18 14v8" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgClockArrowDown;
