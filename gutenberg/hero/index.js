(function (wp) {
  const registerBlockType = wp.blocks.registerBlockType;
  const el = wp.element.createElement;
  const __ = wp.i18n.__;
  const { RadioControl, ToggleControl, PanelBody } = wp.components;
  const { useBlockProps, InspectorControls, InnerBlocks } = wp.blockEditor;
  const { useSelect } = wp.data;
  const allowedBlocks = ["wpboiler-core/hero-slide"];
  const blockName = "hero";

  registerBlockType(`wpboiler-core/${blockName}`, {
    apiVersion: 2,
    title: __("Hero", `${blockName}`),
    description: __(
      "Displays a hero for displaying standout content",
      `${blockName}`
    ),
    category: "design",
    icon: "megaphone",
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
      marginsdouble: {
        type: "string",
        default: "",
      },
    },

    edit: function (props) {
      const { attributes, setAttributes, clientId } = props;
      const { marginselect, marginsdouble } = attributes;

      const innerBlockCount = useSelect(
        (select) => select("core/block-editor").getBlock(clientId).innerBlocks
      );

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
            el("p", {}, __("Hero", `${blockName}`))
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

              // Set a maximum number of slides allowed in the block
              innerBlockCount.length < 8
                ? el(InnerBlocks, {
                    allowedBlocks: allowedBlocks,
                  })
                : el(InnerBlocks, {
                    renderAppender: false,
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
