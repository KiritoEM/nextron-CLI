import { server } from "./src/api/server.js";

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});