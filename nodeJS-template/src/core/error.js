const databaseErrorHandler = (error) => {
    switch (error.name) {
        case "MongoParseError":
            console.error(` 🚨 Database connection error\n ${error.name}: Invalid scheme ❌\n 📔 Please check your connection string to start with "mongodb://" or "mongodb+srv://"`);
            process.exit(1);
        case "MongoNetworkError":
            console.error(` 🚨 Database connection error\n ${error.name}: Network error ❌`);
            process.exit(1);
        default:
            console.error(` 🚨 Database connection error\n ${error.name}: ${error.message} ❌`);
            process.exit(1);
    }
}

export { databaseErrorHandler }