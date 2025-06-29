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
const SvgSmartphoneNfc: React.FC<AnimatedSvgProps> = ({
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
    <rect width={7} height={12} x={2} y={6} rx={1} />
    <AnimatedPath
      d="M13 8.32a7.43 7.43 0 0 1 0 7.36"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M16.46 6.21a11.76 11.76 0 0 1 0 11.58"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgSmartphoneNfc;
