import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import resourceRoutes from "./endpoints/resource.endpoint";
import swaggerUi from "swagger-ui-express";
import { swaggerDocs } from "./swagger";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// endpoints
app.use("/api/resources", resourceRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
