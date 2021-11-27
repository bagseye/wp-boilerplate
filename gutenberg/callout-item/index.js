(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;
  const { useBlockProps, RichText } = wp.blockEditor;

  registerBlockType("wpboiler-core/callout-item", {
    apiVersion: 2,
    title: __("Callout Item", "callout-item"),
    description: __("An individual callout item", "callout-item"),
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

        el(
          "p",
          { className: "block__title" },
          __("Callout Item", "callout-item")
        ),

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
      );
    },

    save: function () {
      return null;
    },
  });
})(window.wp);
