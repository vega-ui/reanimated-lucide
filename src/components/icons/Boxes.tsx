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
const SvgBoxes: React.FC<AnimatedSvgProps> = ({
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
      d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m7 16.5-4.74-2.85"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m7 16.5 5-3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M7 16.5v5.17"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m17 16.5-5-3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m17 16.5 4.74-2.85"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M17 16.5v5.17"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M12 8 7.26 5.15"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m12 8 4.74-2.85"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 13.5V8" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgBoxes;
