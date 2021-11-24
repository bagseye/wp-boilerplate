(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;
  var useBlockProps = wp.blockEditor.useBlockProps;

  registerBlockType("wpboiler-core/site-search", {
    apiVersion: 2,
    title: __("Site Search", "site-search"),
    description: __("Displays a search form", "site-search"),
    category: "widgets",
    icon: "search",
    supports: {
      // Removes support for an HTML mode.
      html: false,
    },

    edit: function () {
      return el(
        "p",
        useBlockProps(),
        __("Site Search – hello from the editor!", "site-search")
      );
    },

    save: function () {
      return null;
    },
  });
})(window.wp);
