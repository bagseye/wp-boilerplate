(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;

  const { RadioControl, ToggleControl, PanelBody, RangeControl } =
    wp.components;
  const { useBlockProps, InspectorControls, InnerBlocks } = wp.blockEditor;
  const allowedBlocks = ["wpboiler-core/promo-group-item"];
  const blockName = "promo-group";

  registerBlockType("wpboiler-core/promo-group", {
    apiVersion: 2,
    title: __("Promo Card Group", `${blockName}`),
    description: __(
      "Displays multiple cards, used for promoting content and directing users. Has two layout styles - stacked and inline",
      `${blockName}`
    ),
    category: "design",
    icon: "grid-view",
    supports: {
      html: false,
    },
    attributes: {
      marginselect: {
        type: "string",
        default: "margins__none",
      },
      orientation: {
        type: "string",
        default: "promogroup__stacked",
      },
      columnselect: {
        type: "number",
        default: 2,
      },
      marginsdouble: {
        type: "string",
        default: "",
      },
    },

    edit: function (props) {
      const { attributes, setAttributes } = props;
      const { marginselect, orientation, columnselect, marginsdouble } =
        attributes;

      const onChangeMarginSelect = (value) =>
        setAttributes({ marginselect: value });
      const onChangeOrientationSelect = (value) =>
        setAttributes({ orientation: value });
      const onChangeRangeControl = (value) =>
        setAttributes({ columnselect: value });

      return el(
        "section",
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
            el("p", {}, __("Promo Group", `${blockName}`))
          )
          // END .titleArea--name
        ),
        // END .titleArea

        // INSPECTOR CONTROL BEGIN
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
              onChange: onChangeMarginSelect,
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
          ),

          el(
            PanelBody,
            {
              title: "Orientation",
            },

            el(RadioControl, {
              selected: orientation,
              options: [
                {
                  label: "Stacked Items",
                  value: "promogroup__stacked",
                },
                {
                  label: "Columns",
                  value: "promogroup__columns",
                },
              ],
              onChange: onChangeOrientationSelect,
            })
          ),

          orientation === "promogroup__columns"
            ? el(
                PanelBody,
                {
                  title: "Columns",
                },

                el(RangeControl, {
                  min: 2,
                  max: 4,
                  value: columnselect,
                  onChange: onChangeRangeControl,
                })
              )
            : ""
        ),
        // INSPECTOR CONTROL END

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
              })
            )
          )
        )
        // PREVIEW AREA END

        // // PREVIEW AREA BEGIN
        // el(
        //   "div",
        //   { className: "promogroup__container" },

        //   el(
        //     "div",
        //     { className: "promogroup__container--content" },

        //     el(InnerBlocks, {
        //       allowedBlocks: allowedBlocks,
        //     })
        //   )
        // )
        // // PREVIEW AREA END
      );
    },

    save: function () {
      return el(InnerBlocks.Content, {});
    },
  });
})(window.wp);
