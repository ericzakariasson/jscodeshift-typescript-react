import { defineTest } from "jscodeshift/dist/testUtils";

describe("update-old-button-to-new-button", () => {
  defineTest(
    __dirname,
    "update-old-button-to-new-button",
    null,
    `update-old-button-to-new-button/basic`,
    { parser: "tsx" }
  );
});
