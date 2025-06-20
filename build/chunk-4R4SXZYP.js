import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgGalleryVertical = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  svgProps,
  pathProps,
  animatedProps,
  ref,
  ...props
}) => /* @__PURE__ */ jsxs(
  AnimatedSvg,
  {
    viewBox: "0 0 24 24",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    animatedProps,
    ref,
    width: size,
    height: size,
    stroke: color,
    strokeWidth,
    ...props,
    children: [
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M3 2h18", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx("rect", { width: 18, height: 12, x: 3, y: 6, rx: 2 }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M3 22h18", animatedProps, ...pathProps })
    ]
  }
);
var GalleryVertical_default = SvgGalleryVertical;

export { GalleryVertical_default };
