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
const SvgMemoryStick: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M6 19v-3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M10 19v-3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M14 19v-3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M18 19v-3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 11V9" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M16 11V9" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 11V9" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M2 15h20" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgMemoryStick;
