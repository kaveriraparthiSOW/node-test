"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./developers/routes"));
const app = (0, express_1.default)();
const port = 3000;
// Home route
app.get("/", (req, res) => {
    res.send("Hello Kaveri, Congratulations! Node + Express + TypeScript is set up.");
});
// GET /developers route
app.use("/developers", routes_1.default);
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
