import simpleGit from 'simple-git';
import path from 'path';
import fs from 'fs';

const cloneTemplate = async (url, localPath, subFolder) => {
    const git = simpleGit();
    const tempDir = path.join(localPath, 'temp-repo');

    await git.clone(url, tempDir);

    await git.cwd(tempDir);
    await git.sparseCheckout.add(subFolder);

    const finalPath = path.join(localPath, path.basename(subFolder));
    fs.renameSync(path.join(tempDir, subFolder), finalPath);

    fs.rmSync(tempDir, { recursive: true, force: true });

    return finalPath;
};

export { cloneTemplate };
