import { WebSocket } from "ws";
import { INIT_game, MOVE } from "../message";
import { GameManager } from "./GameManager";

export class UserManager {
  private users: WebSocket[];
  private Game: GameManager[];
  private pendingUsers: null | WebSocket;
  constructor() {
    this.users = [];
    this.pendingUsers = null;
    this.Game = [];
  }

  addUser(socket: WebSocket) {
    this.users.push(socket);
    this.handler(socket);
  }

  removeUser(socket: WebSocket) {
    this.users = this.users.filter((user) => user != socket);

   
  }

  private handler(socket: WebSocket) {
    socket.on("message", (data) => {
      const message = JSON.parse(data.toString());

      if (message.type === INIT_game) {
        if (this.pendingUsers) {
          // start a game
          const game = new GameManager(this.pendingUsers, socket);
          this.Game.push(game);
          this.pendingUsers = null;
        } else {
          // make user to pending user
          this.pendingUsers = socket;
        }
      }

      if (message.type === MOVE) {
        const game = this.Game.find(game => game.player1 === socket || game.player2 === socket);

        if(game){
            game.makeMove(socket, message.payload.move);
        }
      }
    });

    
  }
}
