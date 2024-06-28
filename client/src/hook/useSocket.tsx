import { useEffect, useState } from "react";

export const useSocket = () =>{

    const [socket, setSocket] = useState<WebSocket | null>(null);

    const URL = "ws://localhost:8080";

    useEffect(()=>{

        const ws =  new WebSocket(URL);

        ws.onopen = () =>{
            console.log("connected");
            setSocket(ws);
        }

        ws.onclose = () =>{
            console.log("disconnected");
            setSocket(null);
            
        }

        return () =>{
            ws.close();
        }

    },[])

    return socket;
}