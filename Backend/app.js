import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//Routes
import { checkRouter } from "./src/routes/check.routes.js";
app.use(checkRouter);


export {app};