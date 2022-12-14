import * as express from "express";
import { getBookById, getBooks, saveBookById } from "./route.books";
import { getArticlesByParams } from "./route.articles";
import { authUser } from "./route.auth";

const bodyParser = require("body-parser");
const cors = require("cors");
const requestsTimeout = require("connect-timeout");

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: true }));
app.use(requestsTimeout("2s"));

/* books */
app.route("/api/books").get(getBooks);
app.route("/api/books/:id").get(getBookById);
app.route("/api/books/:id").put(saveBookById);

/* articles */
app.route("/api/articles").get(getArticlesByParams);

/* auth */
app.route("api/login").post(authUser);


/* app */
const httpServer = app.listen(9001, () => {
  console.log("Mock Server is running on http://localhost:9001")
});

httpServer.setTimeout(500000);
