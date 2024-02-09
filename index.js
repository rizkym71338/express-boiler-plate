const express = require("express");
const application = require("./src/app");
const { PORT } = require("./src/libs/env");

const server = async () => {
  const app = express();

  await application(app);

  app.listen(PORT, () => console.log(`listening to port ${PORT}`));
};

server();
