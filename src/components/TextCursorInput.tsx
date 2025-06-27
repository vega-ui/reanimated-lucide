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
const SvgTextCursorInput: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath
      d="M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M9 6v12" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgTextCursorInput;
