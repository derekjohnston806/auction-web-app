/**
    index.js

    @author:
      - Derek Johnston

    @desc:
      - The primary endpoint for the web application
*/
import { Server } from "djtoolkit";

const server = new Server();

server.start({ hasStatic: true });
