(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;

  const { useBlockProps, RichText } = wp.blockEditor;
  const blockName = "card-group-item";

  registerBlockType("wpboiler-core/card-group-item", {
    apiVersion: 2,
    title: __("Card Group Item", `${blockName}`),
    description: __(
      "An individual card item, which works as part of the card group block",
      `${blockName}`
    ),
    category: "widgets",
    icon: "media-default",
    supports: {
      html: false,
    },
    attributes: {
      title: {
        type: "string",
        default: "",
      },
      content: {
        type: "string",
        default: "",
      },
    },
    parent: ["wpboiler-core/card-group"],

    edit: function (props) {
      const { attributes, setAttributes } = props;
      const { title, content } = attributes;
      return el(
        "article",
        useBlockProps(attributes),

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
            el("p", {}, __("Card Group Item", `${blockName}`))
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

              el(RichText, {
                tagName: "h2",
                placeholder: "Add a title here...",
                className: `${blockName}__title`,
                value: title ? title : "",
                onChange: (value) => setAttributes({ title: value }),
              }),

              el(RichText, {
                tagName: "p",
                placeholder: "Add the content here...",
                className: `${blockName}__content`,
                value: content ? content : "",
                onChange: (value) => setAttributes({ content: value }),
              })
            )
          )
        )
        // PREVIEW AREA END
      );
    },

    save: function () {
      return null;
    },
  });
})(window.wp);
