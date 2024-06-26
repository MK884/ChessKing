import { Chess } from "chess.js";
import { WebSocket } from "ws";
import { DISCONNECTED, GAME_OVER, INIT_game, MOVE } from "../message";

export class GameManager {
  private board: Chess;
  public player1: WebSocket;
  public player2: WebSocket;
  private moveCount = 0;

  constructor(player1: WebSocket, player2: WebSocket) {
    this.player1 = player1;
    this.player2 = player2;
    this.board = new Chess();
    this.player1.send(
      JSON.stringify({
        type: INIT_game,
        payload: {
          color: "white",
        },
      })
    );
    this.player2.send(
      JSON.stringify({
        type: INIT_game,
        payload: {
          color: "black",
        },
      })
    );
  }

  makeMove(
    socket: WebSocket,
    move: {
      from: string;
      to: string;
    }
  ) {
    if (socket !== this.player1 && this.moveCount % 2 === 0) return;

    if (socket !== this.player2 && this.moveCount % 2 === 1) return;

    try {
      this.board.move(move);
    } catch (error) {
      console.log(error);
      return;
    }

    if (this.board.isGameOver()) {
      this.player1.emit(
        JSON.stringify({
          type: GAME_OVER,
          payload: {
            winner: this.board.turn() === "w" ? "black" : "white",
          },
        })
      );
      this.player2.emit(
        JSON.stringify({
          type: GAME_OVER,
          payload: {
            winner: this.board.turn() === "w" ? "black" : "white",
          },
        })
      );
      return;
    }

    if (this.moveCount % 2 === 0) {
      // player one makes move
      this.player2.send(
        JSON.stringify({
          type: MOVE,
          paload: move,
        })
      );
    } else {
      // player2 makes move
      this.player1.send(
        JSON.stringify({
          type: MOVE,
          payload: move,
        })
      );
    }

    this.moveCount++;
  }

  public PlayerDisconnected(socket: WebSocket){
    if(socket === this.player1){
        this.player2.emit(JSON.stringify({
            type: DISCONNECTED,
            res: "player1 disconnected"
        }))
    }else{
        this.player1.emit(JSON.stringify({
            type: DISCONNECTED,
            res: "player2 disconnected"
        }))
    }
  }
}
