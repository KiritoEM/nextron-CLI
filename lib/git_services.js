import simpleGit from "simple-git";
import path from "path";
import fs from "fs";

const cloneTemplate = async (url, localPath, subFolder) => {
  const git = simpleGit();
  try {
    const tempDir = path.join(localPath, "temp-repo");

    await git.clone(url, tempDir);

    await git.cwd(tempDir);
    await git.raw(["sparse-checkout", "init"]);
    await git.raw(["sparse-checkout", "set", subFolder]);

    const subFolderPath = path.join(tempDir, subFolder);
    const finalPath = path.join(localPath, path.basename(subFolder));

    fs.renameSync(subFolderPath, finalPath);

    fs.rmSync(tempDir, { recursive: true, force: true });

    return finalPath;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

export { cloneTemplate };
