(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;

  const { RadioControl, PanelBody, RangeControl } = wp.components;
  const { useBlockProps, InspectorControls, InnerBlocks } = wp.blockEditor;
  const allowedBlocks = ["wpboiler-core/promo-group-item"];

  registerBlockType("wpboiler-core/promo-group", {
    apiVersion: 2,
    title: __("Promo Card Group", "promo-group"),
    description: __(
      "Displays multiple cards, used for promoting content and directing users. Has two layout styles - stacked and inline",
      "promo-group"
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
        default: "stacked",
      },
      columnselect: {
        type: "number",
        default: 2,
      },
    },

    edit: function (props) {
      const { attributes, setAttributes } = props;
      const { marginselect, orientation, columnselect } = attributes;

      const onChangeMarginSelect = (value) =>
        setAttributes({ marginselect: value });
      const onChangeOrientationSelect = (value) =>
        setAttributes({ orientation: value });
      const onChangeRangeControl = (value) =>
        setAttributes({ columnselect: value });

      return el(
        "section",
        useBlockProps(attributes),

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
                  value: "stacked",
                },
                {
                  label: "Columns",
                  value: "columns",
                },
              ],
              onChange: onChangeOrientationSelect,
            })
          ),

          orientation === "columns"
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
          { className: "promogroup__container" },

          el(
            "div",
            { className: "promogroup__container--content" },

            el(InnerBlocks, {
              allowedBlocks: allowedBlocks,
            })
          )
        )
        // PREVIEW AREA END
      );
    },

    save: function (props) {
      const { attributes } = props;
      const { marginselect, orientation, columnselect } = attributes;

      return el(
        "section",
        {
          className: `promogroup ${marginselect} ${
            orientation === "columns"
              ? `promogroup__${orientation} promogroup__${orientation}--${columnselect.toString()}`
              : `promogroup__stacked`
          }`,
        },

        el(
          "div",
          { className: "promogroup__container" },

          el(
            "div",
            { className: "promogroup__container--content" },

            el(InnerBlocks.Content, {})
          )
        )
      );
    },
  });
})(window.wp);
