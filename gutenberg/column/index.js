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
  const blockName = "column";

  registerBlockType("wpboiler-core/column", {
    apiVersion: 2,
    title: __("Column", `${blockName}`),
    description: __("Displays an individual column", `${blockName}`),
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

        // START .titleArea
        el(
          "div",
          { className: `block__titleArea` },

          // START .titleArea--name
          el(
            "div",
            {
              className: `block__titleArea--name`,
            },
            el("p", {}, __("Column", `${blockName}`))
          )
          // END .titleArea--name
        ),
        // END .titleArea

        // PREVIEW AREA BEGIN
        el(
          "div",
          { className: `${blockName}__preview` },

          el(
            "div",
            { className: `${blockName}__container` },

            el(
              "div",
              { className: `${blockName}__content` },

              el(InnerBlocks, {
                allowedBlocks: allowedBlocks,
              })
            )
          )
        )
        // PREVIEW AREA END
      );
    },

    save: function () {
      return el(
        "div",
        { className: `${blockName}` },

        el(InnerBlocks.Content, {})
      );
    },
  });
})(window.wp);
