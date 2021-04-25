import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")))
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/", (request, response) => {
  return
})

const http = createServer(app); // Creating hyper text transfer protocol - http
const io = new Server(http);    // Creating web socket protocol - ws

io.on("connection", (socket: Socket) => {
  console.log("You are now connected", socket.id);
})

app.use(express.json());

app.use(routes);

http.listen(3333, () => console.log("Server is running on port 3333"))
