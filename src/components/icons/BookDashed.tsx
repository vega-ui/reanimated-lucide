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
const SvgBookDashed: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M12 17h1.5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 22h1.5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 2h1.5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M17.5 22H19a1 1 0 0 0 1-1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M17.5 2H19a1 1 0 0 1 1 1v1.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M20 14v3h-2.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M20 8.5V10" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M4 10V8.5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M4 19.5V14" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M4 4.5A2.5 2.5 0 0 1 6.5 2H8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M8 22H6.5a1 1 0 0 1 0-5H8"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgBookDashed;
