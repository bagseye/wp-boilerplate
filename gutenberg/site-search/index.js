(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;
  const { RadioControl, PanelBody, ToggleControl } = wp.components;
  const { useBlockProps, InspectorControls } = wp.blockEditor;

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
    attributes: {
      marginselect: {
        type: "string",
        default: "margins__topBottom",
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

        el(
          "p",
          { className: "block__title" },
          __("Site Search", "site-search")
        ),

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
        // INSPECTOR CONTROLS

        el(
          "div",
          { className: "sitesearch" },

          el("h2", null, __("Site Search Appears Here", "site-search"))
        )
      );
    },

    save: function () {
      return null;
    },
  });
})(window.wp);
