#!/usr/bin/env node

process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')
const game = new Game(new UserInterface(), new RemoteInterface())

// Begin game
game.start()

const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost', //'192.168.88.218''localhost'
    port: 50541
  });
  conn.on('connect', () => {
    console.log("Successfully connected to game server")
    console.log("Name: WGW")
  })

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
}

module.exports = connect
