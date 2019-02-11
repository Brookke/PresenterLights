import { createServer, Server } from 'http';
import express = require('express');
import socketIo = require('socket.io');

import { LightSetting } from './model';

export class MessageServer {
    public static readonly PORT:number = 8080;
    private app!: Express.Application;
    private server!: Server;
    private io!: SocketIO.Server;
    private port!: string | number;

    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }

    private createApp(): void {
        this.app = express();
    }

    private createServer(): void {
        this.server = createServer();
    }

    private config(): void {
        this.port = process.env.PORT || MessageServer.PORT;
    }

    private sockets(): void {
        this.io = socketIo(this.server);
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });

        this.io.on('connect', (socket: any) => {
            console.log('Connected client on port %s.', this.port);
            socket.on('changeLight', (m: LightSetting) => {
                console.log('[server](changeLight): %s', JSON.stringify(m));
                this.io.emit('changeLight', m);
            });

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }

    public getApp(): Express.Application {
        return this.app;
    }
}
