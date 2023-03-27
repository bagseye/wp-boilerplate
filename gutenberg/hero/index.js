(function ({blocks, element, i18n, components, blockEditor, data}) {
  const {registerBlockType} = blocks;
  const {createElement: el} = element;
  const {__} = i18n;
  const { RadioControl, ToggleControl, PanelBody } = components;
  const { useBlockProps, InspectorControls, InnerBlocks } = blockEditor;
  const { useSelect } = data;
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

    edit: (props) => {
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
          "section",
          { className: `${blockName} ${blockName}__preview` },

          el(
            "div",
            { className: `${blockName}__track` },

            el(
              "div",
              { className: `${blockName}__list` },

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

    save: () => {
      return el(InnerBlocks.Content, {});
    },
  });
})(window.wp);
