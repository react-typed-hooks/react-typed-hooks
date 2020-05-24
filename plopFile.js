const path = require("path");

module.exports = function (plop) {
  plop.setGenerator("hook", {
    description: "Add a Hook Package",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Input a name for the hook:",
        default: "useHook",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: path.join(__dirname, "packages", "/{{ camelCase name }}"),
        templateFiles: path.join(__dirname, ".plop", "hook", "**/*"),
        base: path.join(__dirname, ".plop", "hook"),
        skipIfExists: true,
        globOptions: {
          dot: true,
        },
      },
    ],
  });
};
