import express from "express";
import processController from "./controller/process-controller";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);

app.get('/', (_, res) => {
    res.send('Hello World!');
})

app.post("/process", processController.doProcess);

export default app;
