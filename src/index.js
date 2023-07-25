module.exports = function () {
  const express = require("express");
  const swaggerJSDoc = require("swagger-jsdoc");
  const swaggerUI = require("swagger-ui-express");
  const getSwaggerConfig = require("./utils/swagger");
  const router = require("./routes/router");

  const app = express();
  const port = process.env.PORT || 3030;
  const swaggerConfig = getSwaggerConfig(port);

  app.use(
    "/api/docs",
    swaggerUI.serve,
    swaggerUI.setup(swaggerJSDoc(swaggerConfig), { explorer: true })
  );

  app.get('/', (req, res) => res.redirect('/api/docs'));

  app.use("/api/", router.providers);

  app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`);
  });
};
