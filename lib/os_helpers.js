import dialog from "node-file-dialog";
import { renameSync } from "fs";

const openDirectory = async () => {
    try {
        return await dialog({ type: "directory" })
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
}

const renameFolder = async (oldName, newName) => {
    try {
        renameSync(oldName, newName)
    }
    catch (err) {
        console.error(err)
        throw new Error(err);
    }
}

export { openDirectory, renameFolder }