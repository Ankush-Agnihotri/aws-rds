const db = require("./models/index");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from server.....server started!");
});

//Routes
const categoryRouter = require("./routes/categoryRoute");
app.use("/api/categories", categoryRouter);

const publisherRouter = require("./routes/publisherRoute");
app.use("/api/publishers", publisherRouter);

const locationRouter = require("./routes/locationRoute");
app.use("/api/locations", locationRouter);

const bookRouter = require("./routes/bookRoute");
app.use("/api/books", bookRouter);

const authorRouter = require("./routes/authorRoute");
app.use("/api/authors", authorRouter);

const bookAuthorRouter = require("./routes/bookAuthorRoute");
app.use("/api/bookauthors", bookAuthorRouter);

const memberStatusRouter = require("./routes/memberStatusRoute");
app.use("/api/memberstatus", memberStatusRouter);

const memberRouter = require("./routes/memberRoute");
app.use("/api/members", memberRouter);

const bookRequestRouter = require("./routes/bookRequestRoute");
app.use("/api/bookrequests", bookRequestRouter);

const bookRequestStatusRouter = require("./routes/bookRequestStatusRoute");
app.use("/api/bookrequeststatus", bookRequestStatusRouter);

const bookIssueRouter = require("./routes/bookIssueRoute");
app.use("/api/bookissue", bookIssueRouter);

const libraryStaffRouter = require("./routes/libraryStaffRoute");
app.use("/api/staff", libraryStaffRouter);

app.listen(PORT, (req, res) => {
  console.log(`The server is running at port http://localhost:${PORT}`);
});
//this comment is added to check the jenkins working
//this comment is to test that the jenkins is running automatically and manually
//another testing of jenkins pipeline
