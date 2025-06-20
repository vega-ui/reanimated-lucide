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
const SvgMouseOff: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M12 6v.343" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M19 13.343V9A7 7 0 0 0 8.56 2.902"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M22 22 2 2" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgMouseOff;
