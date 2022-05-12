(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;
  const { RadioControl, ToggleControl, PanelBody } = wp.components;
  const { useBlockProps, InspectorControls } = wp.blockEditor;
  const blockName = "separator";

  registerBlockType("wpboiler-core/separator", {
    apiVersion: 2,
    title: __("Separator", `${blockName}`),
    description: __(
      "A styling block that separates content using a horizontal line",
      `${blockName}`
    ),
    category: "widgets",
    icon: "minus",
    supports: {
      // Removes support for an HTML mode.
      html: false,
    },
    attributes: {
      marginselect: {
        type: "string",
        default: "margins__topBottom",
      },
      marginsdouble: {
        type: "string",
        default: "",
      },
    },

    edit: function (props) {
      const { attributes, setAttributes } = props;
      const { marginselect, marginsdouble } = attributes;
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
            el("p", {}, __("Separator", `${blockName}`))
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
                checked: marginsdouble,
                onChange: () =>
                  setAttributes({
                    marginsdouble: marginsdouble ? "" : "margins__double",
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

              el("hr", null)
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
