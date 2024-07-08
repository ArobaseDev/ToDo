const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const http = require('http');

// lancement de l'application express
const app = express();
const server = http.createServer(app);
