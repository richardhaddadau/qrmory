import { __commonJS } from "./chunk-J43GMYXM.js";

// node_modules/d3-svg-to-png/index.js
var require_d3_svg_to_png = __commonJS({
  "node_modules/d3-svg-to-png/index.js"(exports, module) {
    function inlineStyles(source, target) {
      const computed = window.getComputedStyle(source);
      for (const styleKey of computed) {
        target.style[styleKey] = computed[styleKey];
      }
      for (let i = 0; i < source.children.length; i++) {
        inlineStyles(source.children[i], target.children[i]);
      }
    }
    function copyToCanvas({ source, target, scale, format, quality }) {
      let svgData = new XMLSerializer().serializeToString(target);
      let canvas = document.createElement("canvas");
      let svgSize = source.getBoundingClientRect();
      canvas.width = svgSize.width * scale;
      canvas.height = svgSize.height * scale;
      canvas.style.width = svgSize.width;
      canvas.style.height = svgSize.height;
      let ctxt = canvas.getContext("2d");
      ctxt.scale(scale, scale);
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        "qr-types:image/svg+xml;base64," +
          btoa(unescape(encodeURIComponent(svgData))),
      );
      return new Promise((resolve) => {
        img.onload = () => {
          ctxt.drawImage(img, 0, 0);
          resolve(
            canvas.toDataURL(
              `image/${format === "jpg" ? "jpeg" : format}`,
              quality,
            ),
          );
        };
      });
    }
    function downloadImage({ file, name, format }) {
      let a = document.createElement("a");
      a.download = `${name}.${format}`;
      a.href = file;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    module.exports = async function (
      source,
      name,
      {
        scale = 1,
        format = "png",
        quality = 0.92,
        download = true,
        ignore = null,
        cssinline = 1,
        background = null,
      } = {},
    ) {
      source =
        source instanceof Element ? source : document.querySelector(source);
      const target = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg",
      );
      target.innerHTML = source.innerHTML;
      for (const attr of source.attributes) {
        target.setAttribute(attr.name, attr.value);
      }
      if (cssinline === 1) {
        inlineStyles(source, target);
      }
      if (background) {
        target.style.background = background;
      }
      if (ignore != null) {
        const elt = target.querySelector(ignore);
        elt.parentNode.removeChild(elt);
      }
      const file = await copyToCanvas({
        source,
        target,
        scale,
        format,
        quality,
      });
      if (download) {
        downloadImage({ file, name, format });
      }
      return file;
    };
  },
});
export default require_d3_svg_to_png();
//# sourceMappingURL=d3-svg-to-png.js.map
