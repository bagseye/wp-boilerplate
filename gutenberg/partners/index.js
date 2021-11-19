(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;
  var useBlockProps = wp.blockEditor.useBlockProps;

  registerBlockType("wpboiler-core/partners", {
    apiVersion: 2,
    title: __("Partners", "partners"),
    description: __("Displays a list of global partner logos", "partners"),
    category: "design",
    icon: "rest-api",
    supports: {
      // Removes support for an HTML mode.
      html: false,
      alignWide: false,
    },

    edit: function (props) {
      const { attributes, setAttributes } = props;
      return el(
        "p",
        useBlockProps(attributes),
        __("Partners – hello from the editor!", "partners")
      );
    },

    save: function () {
      return el(
        "p",
        useBlockProps.save(),
        __("Partners – hello from the saved content!", "partners")
      );
    },
  });
})(window.wp);
