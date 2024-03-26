const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
    transpileDependencies: true,
    pages: {
        index: {
            entry: "src/index/main.js",
            template: "public/index.html",
            filename: "index.html",
            title: "RIT ToolKit"
        },
        menu: {
            entry: "src/menu/main.js",
            template: "public/menu.html",
            filename: "menu.html",
            title: "RIT ToolKit"
        },
        setting: {
            entry: "src/setting/main.js",
            template: "public/setting.html",
            filename: "setting.html",
            title: "RIT ToolKit"
        }
    }
});
