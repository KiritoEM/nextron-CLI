const questions = [
  {
    type: "list",
    name: "template",
    message: "Choisissez le template à récupérer",
    choices: ["Node.js, Next.js(typescript)"],
  },
  {
    type: "confirm",
    name: "confirmTemplate",
    message: "Confirmez-vous la sélection du template ?",
  },
];

const templates = {
  "Node.js": "node-js-template",
  "Next.js(typescript)": "next-ts-template",
};

export { questions, templates };
