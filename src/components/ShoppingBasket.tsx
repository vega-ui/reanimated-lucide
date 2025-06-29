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
const SvgShoppingBasket: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="m15 11-1 9" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m19 11-4-7" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M2 11h20" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M4.5 15.5h15"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m5 11 4-7" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m9 11 1 9" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgShoppingBasket;
