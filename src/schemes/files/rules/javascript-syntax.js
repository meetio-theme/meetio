module.exports = [
    {
        name: "[JavaScript] Constructor",
        scope: [
            "source.js meta.class.js meta.block.js meta.function.declaration.js storage.type.accessor.js",
            "meta.function-call.constructor.js",
            "entity.name.function.constructor.js",
            "variable.language.constructor.js",
        ],
        foreground: "var(purple)",
    },
    {
        name: "[JavaScript] Object Key",
        scope: ["meta.object-literal.key.js"],
        foreground: "var(blue)",
    },
    {
        name: "[JavaScript] Function",
        scope: [
            "variable.function, variable.annotation",
            "entity.name.function",
            "meta.class-method.js entity.name.function.js",
            "variable.function",
        ],
        foreground: "var(blue)",
    },
    {
        name: "[JavaScript] Language Library",
        scope: ["variable.language"],
        foreground: "var(red)",
        font_style: "italic",
    },
    {
        name: "[JavaScript] Library",
        scope: ["support.function", "support.macro"],
        foreground: "var(blue)",
        font_style: "italic",
    },
    {
        name: "[JavaScript] Support",
        scope: ["support.type", "support.class"],
        foreground: "var(yellow)",
    },
    {
        name: "[JavaScript] Null",
        scope: ["constant.language.null.js"],
        foreground: "var(orange)",
    },
    {
        name: "[JavaScript] Undefined",
        scope: ["constant.language.undefined.js"],
        foreground: "var(orange)",
    },
    {
        name: "[JavaScript] Boolean",
        scope: [
            "source.js meta.export.js meta.binding.name.js variable.other.constant.js",
            "constant.language.boolean.false.js",
            "constant.language.boolean.true.js",
            "entity.name.function",
            "source.js meta.export.js meta.class.js meta.block.js meta.function.js meta.block.js variable.other.constant.js",
        ],
        foreground: "var(orange)",
    },
    {
        name: "[JavaScript] Object",
        scope: [
            "source.js meta.class.js meta.block.js meta.function.js meta.block.js meta.function-call.constructor.js meta.group.js meta.object-literal.js variable.other.readwrite.js",
        ],
        foreground: "var(pink)",
    },
]
