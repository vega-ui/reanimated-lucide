import * as React from 'react';
import * as react_native_reanimated from 'react-native-reanimated';
import * as react_native_svg from 'react-native-svg';

declare const AnimatedSvg: React.ComponentClass<react_native_reanimated.AnimateProps<react_native_svg.SvgProps>, any>;
declare const AnimatedPath: React.ComponentClass<react_native_reanimated.AnimateProps<react_native_svg.PathProps>, any>;

export { AnimatedPath, AnimatedSvg };
