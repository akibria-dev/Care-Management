/* REQUIRE APP */
const app = require("./server.js");
const db = require("../db/index.js");
const port = 8080;

/* START SERVER */
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
