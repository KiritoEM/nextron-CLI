import dialog from "node-file-dialog";
import { renameSync, existsSync } from "fs";
import path from "path";

const openDirectory = async () => {
    try {
        return await dialog({ type: "directory" });
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
}

const renameFolder = async (oldName, newName) => {
    try {
        const oldPath = path.resolve(oldName);
        const newPath = path.resolve(newName);

        renameSync(oldPath, newPath);
        console.log(`Dossier renommé de ${oldPath} à ${newPath}`);
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
}

export { openDirectory, renameFolder };
