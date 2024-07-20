import inquirer from "inquirer";
import plugin from "../lib/plugin.js";
import { program } from "commander";
import packageJson from './../package.json' assert { type: 'json' };
import { questions, templates } from "../lib/__mock__.js";
import { openDirectory, renameFolder } from "../lib/os_helpers.js";
import { cloneTemplate } from "../lib/git_services.js";
import ora from 'ora';

const { description, version } = packageJson;

plugin();

program
    .description(description)
    .version(version, '-v', '-version')
    .parse(process.argv);

const run = async () => {
    const spinner = ora();

    try {
        const answers = await inquirer.prompt(questions);
        const folderPath = await openDirectory();

        spinner.text = 'Clonage du dépôt en cours...';
        spinner.start();

        const tempDir = await cloneTemplate("https://github.com/KiritoEM/nextron-CLI.git", folderPath, templates[templates.template]);

        spinner.succeed('Dépôt cloné avec succès.');

        const { newFolderName } = await inquirer.prompt({
            type: 'input',
            name: 'newFolderName',
            message: 'Renommer le dossier du template',
        });

        await renameFolder(tempDir, newFolderName);

        console.log(`Dossier renommé en ${newFolderName}`);
    } catch (error) {
        console.error('Erreur lors de l\'exécution :', error);
        spinner.fail('Erreur lors du clonage.');
    }
};

run();
