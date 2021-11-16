(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;

  const { useBlockProps, InnerBlocks } = wp.blockEditor;
  const allowedBlocks = [
    "core/heading",
    "core/paragraph",
    "core/button",
    "core/list",
  ];

  registerBlockType("wpboiler-core/column", {
    apiVersion: 2,
    title: __("Column", "column"),
    description: __("Displays an individual column", "column"),
    category: "widgets",
    icon: "schedule",
    supports: {
      html: false,
    },
    parent: ["wpboiler-core/columns"],

    edit: function () {
      return el(
        "div",
        useBlockProps(),

        el("p", { className: "block__title" }, __("Column", "column")),

        el(
          "div",
          { className: "column" },

          el(InnerBlocks, {
            allowedBlocks: allowedBlocks,
          })
        )
      );
    },

    save: function () {
      return el(
        "div",
        { className: "column" },

        el(InnerBlocks.Content, {})
      );
    },
  });
})(window.wp);
