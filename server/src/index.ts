import { WebSocket, WebSocketServer } from "ws";
import { UserManager } from "./controller/UserManager";
import { DISCONNECTED } from "./message";

const PORT = 8080;
const wss = new WebSocketServer({ port: PORT });

const userAgent = new UserManager();

wss.on("listening", () => {
  console.log(`WebSocket server is running on ws:\\localhost:${PORT}`);
});

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  userAgent.addUser(ws);

  ws.on("close", () => {
    userAgent.removeUser(ws);
    console.log("player disconnected");
    // wss.clients.forEach((client)=>{
    //   if(ws !== client && client.readyState === WebSocket.OPEN){
    //     client.send(JSON.stringify({
    //       type: DISCONNECTED,
    //       res: ws
    //     }));
    //   }
    // })
  });
});
