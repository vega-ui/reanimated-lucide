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
const SvgSquareDashedMousePointer: React.FC<AnimatedSvgProps> = ({
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
      d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M5 3a2 2 0 0 0-2 2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M19 3a2 2 0 0 1 2 2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M5 21a2 2 0 0 1-2-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M9 3h1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M9 21h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M14 3h1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M3 9v1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M21 9v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M3 14v1" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgSquareDashedMousePointer;
