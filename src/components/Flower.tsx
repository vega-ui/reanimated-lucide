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
const SvgFlower: React.FC<AnimatedSvgProps> = ({
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
    <circle cx={12} cy={12} r={3} />
    <AnimatedPath
      d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 7.5V9" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M7.5 12H9" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M16.5 12H15"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M12 16.5V15"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m8 8 1.88 1.88"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M14.12 9.88 16 8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m8 16 1.88-1.88"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M14.12 14.12 16 16"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgFlower;
