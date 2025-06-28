# @vega-ui/reanimated-lucide

`@vega-ui/reanimated-lucide` is a React Native package that seamlessly integrates Lucide icons with React Native Reanimated and React Native SVG, providing a smooth and performant experience for displaying animated vector icons.

---

## 📦 Installation

To install the package, run:

```bash
npm install @vega-ui/reanimated-lucide
```
or 

```bash
pnpm add -D @vega-ui/reanimated-lucide
```

or 

```bash
yarn add @vega-ui/reanimated-lucide
```

## 📦 Usage

Import the desired icon from the package and use it within your React Native components:

```tsx
import { Camera } from '@vega-ui/reanimated-lucide';

<Camera width={24} height={24} color="black" />;
```

Each icon component supports standard SVG props such as `width`, `height`, `color`, and `strokeWidth`. Additionally, the imported icons support `animatedProps` and `style` for seamless animation integration using `useAnimatedStyle` / `useAnimatedProps` from react-native-reanimated.
