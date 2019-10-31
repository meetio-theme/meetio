module.exports = [
    {
        name: "[PHP] Inherited Class",
        scope: [
            "embedding.php text.html.basic meta.embedded.block.php source.php meta.class.php meta.path.php entity.other.inherited-class.php",
        ],
        foreground: "var(orange)",
    },
    {
        name: "[PHP] Storage",
        scope: ["storage.modifier.php"],
        foreground: "var(purple)",
    },
    {
        name: "[PHP] Extends",
        scope: ["storage.modifier.extends.php"],
        foreground: "var(purple)",
    },
    {
        name: "[PHP] Construct",
        scope: ["support.function.construct.php"],
        foreground: "var(cyan)",
    },
    {
        name: "[PHP] Echo",
        scope: [
            "embedding.php text.html.basic meta.embedded.block.php source.php meta.class.php meta.block.php meta.function.php meta.block.php support.function.construct.php",
        ],
        font_style: "normal",
        foreground: "var(pink)",
    },
    {
        name: "[PHP] Block",
        scope: [
            "embedding.php text.html.basic meta.embedded.block.php source.php meta.class.php meta.block.php meta.function.php storage.modifier.php",
            "embedding.php text.html.basic meta.embedded.block.php source.php meta.class.php meta.block.php storage.modifier.php",
        ],
        foreground: "var(purple)",
    },
    {
        name: "[PHP] Condition",
        scope: [
            "embedding.php text.html.basic meta.embedded.block.php source.php meta.function.php meta.block.php keyword.control.php",
        ],
        foreground: "var(cyan)",
    },
    {
        name: "[PHP] Constant",
        scope: [
            "embedding.php text.html.basic meta.embedded.block.php source.php meta.class.php meta.block.php meta.function.php meta.block.php constant.language.php",
        ],
        foreground: "var(orange)",
    },
]
