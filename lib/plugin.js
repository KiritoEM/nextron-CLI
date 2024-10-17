import figlet from "figlet";
import chalk from "chalk";
import gradient from "gradient-string";

const plugin = () => {
  const asciiArt = figlet.textSync("NEXTRON", {
    font: "Standard",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 140,
    whitespaceBreak: true,
  });

  const gradientText = gradient(["#3B82F6", "#A855F7"])(asciiArt);

  console.log(gradientText);
  console.log(
    chalk.green(
      `Bienvenue sur Nextron-CLI ❕, un outil qui vous permet de récupérer directement quelques templates d'applications depuis GitHub.\n`
    )
  );
};

export default plugin;
