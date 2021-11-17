(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;

  const { useBlockProps, RichText } = wp.blockEditor;

  registerBlockType("wpboiler-core/card-group-item", {
    apiVersion: 2,
    title: __("Card Group Item", "card-group-item"),
    description: __(
      "An individual card item, which works as part of the card group block",
      "card-group-item"
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

        el(
          "p",
          { className: "block__title" },
          __("Card Group Item", "card-group-item")
        ),

        el(RichText, {
          tagName: "h2",
          placeholder: "Add a title here...",
          className: "cardgroupitem__title",
          value: title ? title : "",
          onChange: (value) => setAttributes({ title: value }),
        }),

        el(RichText, {
          tagName: "p",
          placeholder: "Add the content here...",
          className: "cardgroupitem__content",
          value: content ? content : "",
          onChange: (value) => setAttributes({ content: value }),
        })
      );
    },

    save: function () {
      return null;
    },
  });
})(window.wp);
