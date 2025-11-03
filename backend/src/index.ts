import express from "express";
import http from "http";
import { Server } from "socket.io";
import { SerialPort, ReadlineParser } from "serialport";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const port = new SerialPort({ path: "COM3", baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));

parser.on("data", (data) => {
  try {
    const json = JSON.parse(data);
    io.emit("dados", json); 
  } catch (err) {
    console.error("Erro ao ler JSON:", err);
  }
});

server.listen(4444, () => {
  console.log("Servidor rodando em http://localhost:4444");
});