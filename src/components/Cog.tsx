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
const SvgCog: React.FC<AnimatedSvgProps> = ({
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
      d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 2v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 22v-2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m17 20.66-1-1.73"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M11 10.27 7 3.34"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m20.66 17-1.73-1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m3.34 7 1.73 1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M14 12h8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M2 12h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m20.66 7-1.73 1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m3.34 17 1.73-1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m17 3.34-1 1.73"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m11 13.73-4 6.93"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgCog;
