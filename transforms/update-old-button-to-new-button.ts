import { Transform } from "jscodeshift";

const transform: Transform = (file, api, options) => {
  const j = api.jscodeshift;

  const root = j(file.source);

  /**
   * TODO: Find button import by value and not position
   */
  const BUTTON_IMPORT = root.find(j.ImportDeclaration).at(1);

  BUTTON_IMPORT.replaceWith(
    j.importDeclaration(
      [j.importSpecifier(j.identifier("NewButton"))],
      j.stringLiteral("../../../src/components/NewButton"),
      "value"
    )
  );

  return root.toSource();
};

export default transform;
