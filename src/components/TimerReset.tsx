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
const SvgTimerReset: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M10 2h4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 14v-4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M9 17H4v5" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgTimerReset;
