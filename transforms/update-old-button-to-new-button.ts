import { Transform } from "jscodeshift";

const transform: Transform = (file, api, options) => {
  const j = api.jscodeshift;

  const root = j(file.source);

  root
    .findJSXElementsByModuleName("Button")
    .find(j.JSXAttribute, {
      name: {
        type: "JSXIdentifier",
        name: "color",
      },
      value: {
        type: "StringLiteral",
        value: "primary",
      },
    })
    .find(j.JSXIdentifier)
    .replaceWith((nodePath) => {
      const { node } = nodePath;
      return j.jsxExpressionContainer(j.identifier("appearance"));
    });

  return root.toSource();
};

export default transform;
