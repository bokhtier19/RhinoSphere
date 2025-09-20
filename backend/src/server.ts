import { app } from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server ready at http://localhost:${PORT}`));
