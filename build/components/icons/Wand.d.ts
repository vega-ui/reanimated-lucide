import * as React from 'react';
import { SvgProps } from 'react-native-svg';
import { useAnimatedProps } from 'react-native-reanimated';
import { AnimatedSvg, AnimatedPath } from '../../animatedFactory.js';

interface AnimatedSvgProps extends SvgProps {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    svgProps?: Partial<React.ComponentProps<typeof AnimatedSvg>>;
    pathProps?: Partial<React.ComponentProps<typeof AnimatedPath>>;
    animatedProps?: ReturnType<typeof useAnimatedProps>;
    ref?: React.Ref<React.Component<SvgProps>>;
}
declare const SvgWand: React.FC<AnimatedSvgProps>;

export { type AnimatedSvgProps, SvgWand as default };
