# Tran-Gia-Hieu

Clone the repository:
git clone <repository-url>
cd <repository-folder>

Install dependencies:
npm install

Create a .env file in the root directory:
DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/<database>"
PORT=3000

Set up the database with Prisma:
npx prisma migrate dev --name init

Run the Development Server:
npm run dev

Lint the Code:
npm run lint

Format the Code:
npm run format

The API documentation is available via Swagger UI at:
http://localhost:3000/api-docs

Endpoint:
Create a Resource
Method: POST
URL: /api/resources

Get All Resources
Method: GET
URL: /api/resources

Get a Resource by ID
Method: GET
URL: /api/resources/{id}

Update a Resource
Method: PUT
URL: /api/resources/{id}

Folder Structure

src/
├── controllers/ # Business logic for handling requests
├── endpoints/ # API route definitions
├── services/ # Database connection and other services
├── swagger/ # Swagger API documentation components and paths
│ ├── components.ts # Reusable schemas and responses
│ ├── paths/ # Endpoint-specific Swagger documentation
│ └── index.ts # Combined Swagger configuration
├── prisma/ # Prisma schema and migrations
├── app.ts # Main Express app setup

Tech Stack
Node.js: Runtime for JavaScript
Express: Web framework for building APIs
TypeScript: Superset of JavaScript for type safety
Prisma: ORM for database interaction
PostgreSQL: Relational database
Swagger: API documentation and testing
