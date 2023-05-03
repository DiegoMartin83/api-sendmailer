"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const path_1 = __importDefault(require("path"));
const contactoRoutes_1 = __importDefault(require("./routes/contactoRoutes"));
console.log("Testing server...");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        //Configuraciones
        this.app.set('port', process.env.PORT || 3000);
        //Middlewares
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)()); //iniciamos cors
        this.app.use(express_1.default.json()); //habilitamos el intercambio de objetos json entre aplicaciones
        this.app.use(express_1.default.urlencoded({ extended: false })); //habilitamos para recibir datos a traves de formularios html.
        //Variables globales
        this.app.set('views', path_1.default.join(__dirname, 'views')); //indicamos que views esta en dist y no en el modulo principal
        this.app.engine('.hbs', (0, express_handlebars_1.default)({
            defaultLayout: 'main',
            layoutsDir: path_1.default.join(this.app.get('views'), 'layouts'),
            partialsDir: path_1.default.join(this.app.get('views'), 'partials'),
            extname: 'hbs',
            helpers: require('./lib/handlebars') //definimos donde estan los helpers
        }));
        this.app.set('view engine', '.hbs'); //ejecutamos el modulo definido
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use("/contacto", contactoRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Sever running on port " + this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
//# sourceMappingURL=index.js.map