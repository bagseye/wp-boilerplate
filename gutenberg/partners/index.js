(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;

  const { RadioControl, PanelBody, ToggleControl } = wp.components;
  const { useBlockProps, InspectorControls } = wp.blockEditor;

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
    attributes: {
      marginselect: {
        type: "string",
        default: "margins__none",
      },
      margindouble: {
        type: "string",
        default: "",
      },
    },

    edit: function (props) {
      const { attributes, setAttributes } = props;

      const { marginselect, margindouble } = attributes;
      return el(
        "div",
        useBlockProps(attributes),

        el("p", { className: "block__title" }, __("Partners", "partners")),

        // INSPECTOR CONTROLS
        el(
          InspectorControls,
          null,

          el(
            PanelBody,
            {
              title: "Margins",
            },

            el(RadioControl, {
              selected: marginselect,
              options: [
                {
                  label: "No Margins",
                  value: "margins__none",
                },
                {
                  label: "Top & Bottom Margins",
                  value: "margins__topBottom",
                },
                {
                  label: "Top Margin Only",
                  value: "margins__top",
                },
                {
                  label: "Bottom Margin Only",
                  value: "margins__bottom",
                },
              ],
              onChange: (value) => setAttributes({ marginselect: value }),
            }),

            marginselect !== "margins__none" &&
              el(ToggleControl, {
                label: "Double Margins?",
                checked: margindouble,
                onChange: () =>
                  setAttributes({
                    margindouble: margindouble ? "" : "margins__double",
                  }),
              })
          )
        ),

        el("h2", null, __("Partner Logos", "partners")),

        el(
          "p",
          null,
          __(
            "To modify these icons select Partners in the main admin menu",
            "partners"
          )
        )
      );
    },

    save: function () {
      return null;
    },
  });
})(window.wp);
