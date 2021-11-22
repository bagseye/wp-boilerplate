(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;
  const { RadioControl, PanelBody, ToggleControl } = wp.components;
  const { useBlockProps, InspectorControls } = wp.blockEditor;

  registerBlockType("wpboiler-core/faqs", {
    apiVersion: 2,
    title: __("FAQs", "faqs"),
    description: __("Displays an FAQ block", "faqs"),
    category: "design",
    icon: "format-status",
    supports: {
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

        el("p", { className: "block__title" }, __("FAQs", "faqs")),

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

        el("h2", null, __("Frequently Asked Questions", "faqs")),

        el(
          "p",
          null,
          __("To modify these select FAQs in the main admin menu", "faqs")
        )
      );
    },

    save: function () {
      return null;
    },
  });
})(window.wp);
