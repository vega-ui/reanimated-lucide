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
const SvgUnfoldVertical: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M12 22v-6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 8V2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M4 12H2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M10 12H8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M16 12h-2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M22 12h-2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m15 19-3 3-3-3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m15 5-3-3-3 3"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgUnfoldVertical;
