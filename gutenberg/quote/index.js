(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;
  const { RadioControl, ToggleControl, PanelBody } = wp.components;
  const { useBlockProps, InspectorControls, RichText } = wp.blockEditor;
  const blockName = "quote";

  registerBlockType("wpboiler-core/quote", {
    apiVersion: 2,
    title: __("Quote", `${blockName}`),
    description: __("Displays a single quote", `${blockName}`),
    category: "design",
    icon: "format-quote",
    supports: {
      // Removes support for an HTML mode.
      html: false,
      alignWide: false,
    },
    attributes: {
      quotecontent: {
        type: "string",
        default: "",
      },
      quotename: {
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
      const { quotecontent, quotename, marginselect, margindouble } =
        attributes;
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
            el("p", {}, __("Quote", `${blockName}`))
          )
          // END .titleArea--name
        ),
        // END .titleArea

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

              el(
                "figure",
                { className: `${blockName}` },

                el(
                  "blockquote",
                  null,

                  el(RichText, {
                    tagName: "p",
                    placeholder: "Enter a quote here...",
                    value: quotecontent ? quotecontent : "",
                    onChange: (value) => setAttributes({ quotecontent: value }),
                  })
                ),

                el(RichText, {
                  tagName: "figcaption",
                  placeholder: "Enter the name here",
                  value: quotename ? quotename : "",
                  onChange: (value) => setAttributes({ quotename: value }),
                })
              )
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
