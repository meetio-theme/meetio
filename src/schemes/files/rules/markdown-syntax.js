module.exports = [
    {
        name: "[Markdown] Deleted",
        scope: ["markup.deleted"],
        foreground: "var(red)",
    },
    {
        name: "[Markdown] Inserted",
        scope: ["markup.inserted"],
        foreground: "var(green)",
    },
    {
        name: "[Markdown] Changed",
        scope: ["markup.changed"],
        foreground: "var(blue)",
    },
    {
        name: "[Markdown] Headings",
        scope: [
            "markdown.heading",
            "markup.heading | markup.heading entity.name",
        ],
        font_style: "bold",
        foreground: "var(green)",
    },
    {
        name: "[Markdown] Links",
        scope: ["string.other.link", "markup.underline.link"],
        font_style: "italic",
        foreground: "var(purple)",
    },
    {
        name: "[Markdown] Link Description",
        scope: [
            "entity.name.reference.link.markdown",
            "string.other.link.description.title.markdown",
            "markup.underline.link.image.markdown",
        ],
        foreground: "var(purple)",
    },
    {
        name: "[Markdown] Link Description",
        scope: [
            "markup.list.unnumbered.markdown meta.paragraph.list.markdown meta.link.inline.description.markdown",
            "meta.block-level.markdown markup.quote.markdown meta.link.inline.description.markdown",
            "text.html.markdown meta.paragraph.markdown meta.link.inline.description.markdown",
        ],
        foreground: "var(yellow)",
    },
    {
        name: "[Markdown] Image Inline",
        scope: [
            "meta.paragraph.markdown meta.link.inline.description.markdown",
            "meta.paragraph.markdown meta.image.inline.description.markdown",
        ],
        foreground: "var(orange)",
    },
    {
        name: "[Markdown] Bold",
        scope: ["markup.bold"],
        font_style: "bold",
        foreground: "var(red)",
    },
    {
        name: "[Markdown] Italic",
        scope: ["markup.italic"],
        font_style: "italic",
        foreground: "var(red)",
    },
    {
        name: "[Markdown] Bold & Italic",
        scope: ["markup.italic markup.bold | markup.bold markup.italic"],
        font_style: "bold italic",
    },
    {
        name: "[Markdown] Numbered List Bullet",
        scope: ["markup.list.numbered.bullet"],
        foreground: "var(green)",
    },
    {
        name: "[Markdown] Code Inline",
        scope: ["markup.raw.inline"],
        background: "color(var(blue) alpha(0.05))",
    },
    {
        name: "[Markdown] Code Block",
        scope: [
            "meta.paragraph.markdown meta.code-fence.definition.begin.text.markdown-gfm",
            "meta.paragraph.markdown meta.code-fence.definition.end.text.markdown-gfm",
            "meta.paragraph.markdown markup.raw.code-fence.markdown-gfm",
        ],
        background: "color(var(blue) alpha(0.05))",
    },
    {
        name: "[Markdown] Blockquotes",
        scope: [
            "text.html.markdown meta.block-level.markdown markup.quote.markdown",
        ],
        font_style: "italic",
    },
    {
        name:
            "[Markdown] - Color for Punctuation — Heading, `Code` and fenced ```code blocks```, **Bold**, _Italic_",
        scope: [
            "punctuation.definition.raw.begin.markdown",
            "punctuation.definition.raw.end.markdown",
            "punctuation.definition.raw.code-fence.begin.markdown",
            "punctuation.definition.raw.code-fence.end.markdown",
            "punctuation.definition.heading.begin.markdown",
            "punctuation.definition.bold.begin.markdown",
            "punctuation.definition.bold.end.markdown",
            "punctuation.definition.italic.begin.markdown",
            "punctuation.definition.italic.end.markdown",
        ],
        foreground: "color(var(background) blend(var(foreground) 85%))",
    },
]
