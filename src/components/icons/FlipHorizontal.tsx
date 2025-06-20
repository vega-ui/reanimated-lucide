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
const SvgFlipHorizontal: React.FC<AnimatedSvgProps> = ({
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
      d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 20v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 14v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 8v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 2v2" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgFlipHorizontal;
