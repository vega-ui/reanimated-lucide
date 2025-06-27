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
const SvgLoader: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M12 2v4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m16.2 7.8 2.9-2.9"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M18 12h4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m16.2 16.2 2.9 2.9"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 18v4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m4.9 19.1 2.9-2.9"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M2 12h4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m4.9 4.9 2.9 2.9"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgLoader;
