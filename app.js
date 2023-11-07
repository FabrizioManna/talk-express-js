// Import delle dipendenze
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mysql = require("mysql2");


// Connessione al DB
const connection = mysql.createConnection({
    host: "mysql",
    user: "admin",
    password: "admin",
    database: "guestbooks"
});

// Middleware a livello di applicazione
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));


// Homepage
app.get('/', (req, res) => {
	try {
		connection.query(
            `SELECT * FROM messages`,
            (error, results, fields) => {
                if(error) throw error;
                res.render('index', { guestbook: results });
            }
        );
  	} catch (error) {
    	next(error);
  	}
});

app.get('/formguest', (req, res) => {
	try {
		res.render('form');
  	} catch (error) {
    	next(error);
  	}
});

// Rotte
app.get("/guestbook", (req, resp) => {
    try {
        connection.query(
            `SELECT * FROM messages`,
            (error, results, fields) => {
                if(error) throw error;
                resp.status(200).json(results);
            }
        )
    }
    catch(error) {
        console.log("ERROR THROW GET GUESTBOOK:", error);
    }
});

app.post("/guestbook", (req, resp) => {
    try {
        const { name, message } = req.body;
        connection.query(
            `INSERT INTO messages(name, message) VALUES (?,?)`,
            [name, message],
            (error, results, fields) => {
                if(error) resp.status(500).json(error);
                else {
                    resp.status(201).json({ status: 201 });
                }
            }
        )
    
    }
    catch(error) {
        console.log("ERROR THROW:", error);
    }
});

app.get("*", (req, resp) => resp.status(404).json());

app.listen(3000, (req, resp) => {
    console.log("🚀 SERVER LISTEN ON PORT: 3000");
});