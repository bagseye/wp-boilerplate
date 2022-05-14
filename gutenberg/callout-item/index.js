(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;
  const { useBlockProps, RichText } = wp.blockEditor;
  const blockName = "callout-item";

  registerBlockType("wpboiler-core/callout-item", {
    apiVersion: 2,
    title: __("Callout Item", `${blockName}`),
    description: __("An individual callout item", `${blockName}`),
    category: "widgets",
    icon: "megaphone",
    supports: {
      // Removes support for an HTML mode.
      html: false,
      alignWide: false,
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
    parent: ["wpboiler-core/callout"],

    edit: function (props) {
      const { attributes, setAttributes } = props;
      const { title, content } = attributes;
      return el(
        "div",
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
            el("p", {}, __("Callout Item", `${blockName}`))
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
                tagName: "h3",
                placeholder: "Enter a title here",
                className: "callout__item--title",
                value: title ? title : "",
                onChange: (value) => setAttributes({ title: value }),
              }),

              el(RichText, {
                tagName: "p",
                placeholder: "Enter the content here",
                className: "callout__item--content",
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
