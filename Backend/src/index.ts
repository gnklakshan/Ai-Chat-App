import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connetctions and listners
const PORT = process.env.PORT || 5000;

connectToDatabase().then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT} and connected to database`));
}).catch((err) => {
    console.log(err)
});
