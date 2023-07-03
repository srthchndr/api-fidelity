import { app } from ".";
import { connectToDB } from "./db";

const {
    env: { PORT }
} = process;

Promise.resolve(connectToDB())

app.listen(PORT || 0, () => {
    console.log(`Started server on ${PORT || 0}`)
});