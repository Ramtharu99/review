"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const restro_routes_1 = __importDefault(require("./routes/restro.routes"));
const cors_1 = __importDefault(require("cors"));
const error_middleware_1 = require("./middleware/error.middleware");
const PORT = 3001;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'http//localhost:30001',
    optionsSuccessStatus: 200
}));
app.use('/restros', restro_routes_1.default);
app.use('/users', user_route_1.default);
app.use('/review', user_route_1.default);
app.use('/contact', user_route_1.default);
app.listen(PORT, () => {
    console.log('Running on port', PORT);
});
app.use(error_middleware_1.genericErrorHandler);
exports.default = app;
//# sourceMappingURL=index.js.map