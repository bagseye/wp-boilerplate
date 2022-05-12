(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;
  const { RadioControl, PanelBody, ToggleControl } = wp.components;
  const { useBlockProps, InspectorControls, InnerBlocks } = wp.blockEditor;
  const allowedBlocks = [
    "core/paragraph",
    "core/heading",
    "core/buttons",
    "core/list",
    "core/table",
    "core/image",
    "wpboiler-core/columns",
    "wpboiler-core/feed",
    "wpboiler-core/flexiblock",
    "wpboiler-core/promo-group",
    "wpboiler-core/partners",
    "wpboiler-core/faqs",
    "wpboiler-core/site-search",
    "wpboiler-core/customer-testimonials",
    "wpboiler-core/callout",
    "wpboiler-core/quote",
    "wpboiler-core/separator",
    "wpboiler-core/fixed-spacer",
  ];
  const blockName = "panel";

  registerBlockType("wpboiler-core/panel", {
    apiVersion: 2,
    title: __("Panel", `${blockName}`),
    description: __("Creates a full-width panel", `${blockName}`),
    category: "design",
    icon: "button",
    supports: {
      // Removes support for an HTML mode.
      html: false,
      alignWide: false,
      color: {
        text: false,
        backgroundColor: true,
      },
    },
    attributes: {
      marginselect: {
        type: "string",
        default: "margins__none",
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
            el("p", {}, __("Panel", `${blockName}`))
          )
          // END .titleArea--name
        ),
        // END .titleArea

        el(
          InspectorControls,
          null,

          // BLOCK MARGINS
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

              el(InnerBlocks, {
                allowedBlocks: allowedBlocks,
                dropZone: true,
              })
            )
          )
        )
        // PREVIEW AREA END
      );
    },

    save: function () {
      return el(InnerBlocks.Content, {});
    },
  });
})(window.wp);
