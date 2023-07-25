## FLIXED REST API

**How to run the project:**
 - run `npm i` command.
 - run `npx prisma db push` to generate the local database.
 - run `npx prisma db seed` to fill the database with data.
 - run `npm run dev` to start the server.

**Features** 
 - **Swagger:** Adds documentation to the and a playground to test the APIs.
 - **Prisma:** Handles the database tables providing as an ORM, providing type-safety and a playground where you can test your database tables.
 
**Swagger**: Head to `http://localhost:3030/api/docs/` to see the API documentation.
**Prisma** Run `npx prisma studio` to start the prisma playground.

**Things to add/improve:**
-	Change to TypeScript to have type-safety.
 - Document all the APIs with swagger.
 - Add routes authentication.
 - Add some sort of cache for the APIs.
