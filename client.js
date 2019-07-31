#!/usr/bin/env node

const net = require('net');
const { IP, PORT } = require('./constants');


const connect = function() {
  const conn = net.createConnection({
    host: IP,//'localhost'
    port: PORT
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server")
    conn.write("Name: WGW")
    //setTimeout(() => {
    //  conn.write("Move: up")
    //}, 500)

  })

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
}

module.exports = connect
