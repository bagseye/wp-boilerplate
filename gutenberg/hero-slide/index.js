(function (wp) {
  const registerBlockType = wp.blocks.registerBlockType;
  const el = wp.element.createElement;
  const __ = wp.i18n.__;
  const { RadioControl, ToggleControl, PanelBody } = wp.components;
  const { useBlockProps, InspectorControls, InnerBlocks } = wp.blockEditor;
  const allowedBlocks = ["wpboiler-core/hero-slide"];
  const blockName = "hero-slide";

  registerBlockType(`wpboiler-core/${blockName}`, {
    apiVersion: 2,
    title: __("Hero Slide", `${blockName}`),
    description: __("An individual slide for a hero block", `${blockName}`),
    category: "design",
    icon: "megaphone",
    supports: {
      // Removes support for an HTML mode.
      html: false,
      alignWide: false,
    },

    edit: function (props) {
      const { attributes } = props;

      return el(
        "div",
        useBlockProps(attributes),
        el(
          "p",
          { className: "block__title" },
          __("Hero Slide", `${blockName}`)
        ),

        // PREVIEW AREA BEGIN
        el(
          "div",
          { className: `${blockName}` },

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
      );
    },

    save: function () {
      return el(InnerBlocks.Content, {});
    },
  });
})(window.wp);
