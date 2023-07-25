module.exports = function (port) {
  return {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Flixed REST API",
        version: "1.0.0",
        description: "Simple REST API for Flixed",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Diego Luciano",
          url: "https://www.linkedin.com/in/d-luciano/",
          email: "dlucianogomez@gmail.com",
        },
      },
      servers: [
        {
          url: isNaN(port) ? port : `http://localhost:${port}`,
        },
      ],
    },
    apis: ["src/routes/*.js"],
  }
}
