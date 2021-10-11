"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeWebsite = void 0;
var server_1 = __importDefault(require("react-dom/server"));
var react_1 = __importDefault(require("react"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var Page_1 = require("./components/Page");
function wrapAsPage(element) {
    return (react_1.default.createElement("html", { lang: "en" },
        react_1.default.createElement("head", null,
            react_1.default.createElement("meta", { charSet: "utf-8" }),
            react_1.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
            react_1.default.createElement("title", null, "Super Auto Pets Database"),
            react_1.default.createElement("meta", { name: "description", content: "A database of pets, food and stats from the game Super Auto Pets." }),
            react_1.default.createElement("meta", { name: "author", content: "Ben Coveney" }),
            react_1.default.createElement("link", { rel: "stylesheet", href: "tailwind.css" })),
        react_1.default.createElement("body", { className: "bg-gray-200" }, element)));
}
function homepage(pets) {
    return wrapAsPage(react_1.default.createElement(Page_1.Page, { pets: pets }));
}
function writeWebsite(pets) {
    var content = server_1.default.renderToStaticNodeStream(homepage(pets));
    var indexPath = path_1.default.resolve(process.cwd(), "docs", "index.html");
    var writeStream = fs_1.default.createWriteStream(indexPath);
    content.pipe(writeStream);
    writeStream.on("finish", function () { return console.log("wrote db"); });
}
exports.writeWebsite = writeWebsite;
