(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;
  var useBlockProps = wp.blockEditor.useBlockProps;

  registerBlockType("wpboiler-core/fixed-spacer", {
    apiVersion: 2,
    title: __("Fixed Spacer", "fixed-spacer"),
    description: __("Creates a fixed unit of space", "fixed-spacer"),
    category: "design",
    icon: "image-flip-vertical",
    supports: {
      // Removes support for an HTML mode.
      html: false,
      alignWide: false,
    },

    edit: function () {
      return el(
        "div",
        useBlockProps(),

        el(
          "p",
          { className: "block__title" },
          __("Fixed Spacer", "fixed-spacer")
        ),

        el("div", { className: "fixedspacer" })
      );
    },

    save: function () {
      return null;
    },
  });
})(window.wp);
