import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// Colorful terminal text setup
const colors = {
  reset: "\x1b[0m",
  cyan: "\x1b[36m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  magenta: "\x1b[35m",
};

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Configuration check
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error(
    `${colors.red}❌ ERROR: MONGO_URI is undefined!${colors.reset}\n🔧 Add it to your .env file!\n`
  );
  process.exit(1);
}

// Database connection with enhanced logging
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`${colors.green}✅ MongoDB Connected${colors.reset}`);

    app.listen(PORT, () => {
      console.log(
        `${colors.magenta}🚀 Server running in ${process.env.NODE_ENV} mode\n` +
          `${colors.yellow}📡 Listening on port ${PORT}${colors.reset}\n` +
          `${colors.cyan}🔗 http://localhost:${PORT}${colors.reset}`
      );
    });
  })
  .catch((err) => {
    console.error(
      `${colors.red}❌ Connection failed: ${err.message}${colors.reset}`
    );
    process.exit(1);
  });

// Routes
app.get("/", (req, res) => res.send("API is running 🌟"));

// Handle unhandled rejections
process.on("unhandledRejection", (err) => {
  console.error(
    `${colors.red}❌ Unhandled Rejection: ${err.message}${colors.reset}`
  );
  process.exit(1);
});
