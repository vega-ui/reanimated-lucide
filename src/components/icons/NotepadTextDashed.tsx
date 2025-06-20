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
const SvgNotepadTextDashed: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M8 2v4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 2v4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M16 2v4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M16 4h2a2 2 0 0 1 2 2v2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M20 12v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M20 18v2a2 2 0 0 1-2 2h-1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M13 22h-2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M7 22H6a2 2 0 0 1-2-2v-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M4 14v-2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M4 8V6a2 2 0 0 1 2-2h2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M8 10h6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 14h8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 18h5" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgNotepadTextDashed;
