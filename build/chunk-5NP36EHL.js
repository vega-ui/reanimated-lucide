import Animated from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

// src/animatedFactory.ts
var AnimatedSvg = Animated.createAnimatedComponent(Svg);
var AnimatedPath = Animated.createAnimatedComponent(Path);

export { AnimatedPath, AnimatedSvg };
