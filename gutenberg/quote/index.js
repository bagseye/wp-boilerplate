(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;
  const { RadioControl, ToggleControl, PanelBody } = wp.components;
  const { useBlockProps, InspectorControls, RichText } = wp.blockEditor;

  registerBlockType("wpboiler-core/quote", {
    apiVersion: 2,
    title: __("Quote", "quote"),
    description: __("Displays a single quote", "quote"),
    category: "design",
    icon: "format-quote",
    supports: {
      // Removes support for an HTML mode.
      html: false,
      alignWide: false,
    },
    attributes: {
      quoteContent: {
        type: "string",
        default: "",
      },
      quoteName: {
        type: "string",
        default: "",
      },
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
      const { quoteContent, quoteName, marginselect, margindouble } =
        attributes;
      return el(
        "div",
        useBlockProps(attributes),

        el("p", { className: "block__title" }, __("Quote", "quote")),

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
          "figure",
          { className: "quote" },

          el(
            "blockquote",
            null,

            el(RichText, {
              tagName: "p",
              placeholder: "Enter a quote here...",
              value: quoteContent ? quoteContent : "",
              onChange: (value) => setAttributes({ quoteContent: value }),
            })
          ),

          el(RichText, {
            tagName: "figcaption",
            placeholder: "Enter the name here",
            value: quoteName ? quoteName : "",
            onChange: (value) => setAttributes({ quoteName: value }),
          })
        )
      );
    },

    save: function () {
      return null;
    },
  });
})(window.wp);
