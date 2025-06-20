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
const SvgCircleFadingPlus: React.FC<AnimatedSvgProps> = ({
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
      d="M12 2a10 10 0 0 1 7.38 16.75"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 8v8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M16 12H8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M2.5 8.875a10 10 0 0 0-.5 3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M2.83 16a10 10 0 0 0 2.43 3.4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M4.636 5.235a10 10 0 0 1 .891-.857"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M8.644 21.42a10 10 0 0 0 7.631-.38"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgCircleFadingPlus;
