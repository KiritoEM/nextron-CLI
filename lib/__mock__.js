const questions = [
    {
        type: "list",
        name: "template",
        message: "Choisissez le template à récupérer",
        choices: ["Node.js", "Flask"]
    },
    {
        type: 'confirm',
        name: 'confirmTemplate',
        message: 'Confirmez-vous la sélection du template ?'
    },
]

const templates = {
    "Node.js": "nodeJS-template",
}


export { questions, templates }