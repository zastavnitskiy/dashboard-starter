module.exports = function(plop) {
  // create your generators here
  plop.setGenerator("basics", {
    description: "Component generator",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name please"
      }
    ], // array of inquirer prompts
    actions: [
      {
        // Add a new file
        type: "add",
        // Path for the new file
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.js",
        // Handlebars template used to generate content of new file
        templateFile: "src/plop-templates/Component/Component.js.hbs"
      },
      {
        // Add a new file
        type: "add",
        // Path for the new file
        path: "src/components/{{pascalCase name}}/index.js",
        // Handlebars template used to generate content of new file
        templateFile: "src/plop-templates/Component/index.js.hbs"
      },
      {
        // Add a new file
        type: "add",
        // Path for the new file
        path:
          "src/components/{{pascalCase name}}/{{pascalCase name}}.module.css",
        // Handlebars template used to generate content of new file
        templateFile: "src/plop-templates/Component/Component.module.css.hbs"
      }
    ] // array of actions
  });
};
