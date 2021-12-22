import express from "express";
import AppRouter from "./routes/index.routes";

const app = express();
const port = 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(AppRouter);

app.listen(port, () => {
  console.log(`🌐 🔉 Server started at port: ${port}`);
});
