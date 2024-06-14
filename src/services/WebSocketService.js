import { io } from "socket.io-client";

class WebSocketService {
  static instance = null;
  socket = null;
  callbacks = {};

  static getInstance() {
    if (!WebSocketService.instance) {
      WebSocketService.instance = new WebSocketService();
    }
    return WebSocketService.instance;
  }

  connect(url) {
    if (!this.socket) {
      this.socket = io(url);

      this.socket.on("connect", () => {
        console.log("Socket connected!");
      });
    }
  }

  on(event, callback) {
    if (this.socket) this.socket.on(event, callback);
  }

  emit(event, data) {
    if (this.socket) this.socket.emit(event, data);
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
}

export default WebSocketService;
