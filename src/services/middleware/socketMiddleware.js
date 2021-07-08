export const socketMiddleware = (wsUrl, wsActions) => {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const {
        wsInit,
        wsClose,
        wsSendMessage,
        onOpen,
        onClose,
        onError,
        onMessage,
      } = wsActions;

      if (type === wsInit) {
        socket = new WebSocket(typeof wsUrl === "function" ? wsUrl() : wsUrl);

        socket.onopen = (event) => {
          console.log("open");
          console.log(event);
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          console.log("error");
          console.log(event);
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          console.log("message");
          console.log(event);
          const { data } = event;
          const parsedData = JSON.parse(data);

          dispatch({
            type: onMessage,
            payload: {
              data: parsedData,
              timestamp: new Date().getTime() / 100,
            },
          });
        };

        socket.onclose = (event) => {
          console.log("close");
          console.log(event);
          dispatch({ type: onClose, payload: event });
        };
      }

      if (wsClose && type === wsClose && socket) {
        socket.close();
      }

      if (wsSendMessage && type === wsSendMessage && socket) {
        socket.send(JSON.stringify(payload));
      }

      next(action);
    };
  };
};
