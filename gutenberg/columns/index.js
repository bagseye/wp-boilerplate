(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;
  const { RangeControl, RadioControl, ToggleControl, PanelBody } =
    wp.components;
  const { useBlockProps, InnerBlocks, InspectorControls } = wp.blockEditor;
  const allowedBlocks = ["wpboiler-core/column"];

  registerBlockType("wpboiler-core/columns", {
    apiVersion: 2,
    title: __("Columns", "columns"),
    description: __("Displays content in columns", "columns"),
    category: "design",
    icon: "schedule",
    supports: {
      html: false,
      alignWide: false,
    },
    attributes: {
      columnselect: {
        type: "number",
        default: 2,
      },
      marginselect: {
        type: "string",
        default: "margins__inContent",
      },
      margindouble: {
        type: "string",
        default: "",
      },
      narrowcontent: {
        type: "string",
        default: "",
      },
      reverseorder: {
        type: "string",
        default: "",
      },
      columnoffset: {
        type: "string",
        default: "",
      },
    },

    edit: function (props) {
      const { attributes, setAttributes } = props;

      const {
        columnselect,
        marginselect,
        margindouble,
        narrowcontent,
        reverseorder,
        columnoffset,
      } = attributes;
      return el(
        "section",
        useBlockProps(),
        __("Add columns by pressing the + icon. Maximum 4 columns", "columns"),

        // INSPECTOR CONTROLS
        el(
          InspectorControls,
          null,

          el(
            PanelBody,
            {
              title: "Columns Select",
            },

            el(RangeControl, {
              min: 2,
              max: 4,
              value: columnselect,
              onChange: (value) => setAttributes({ columnselect: value }),
            })
          ),

          el(
            PanelBody,
            {
              title: "Margin Select",
            },

            el(RadioControl, {
              selected: marginselect,
              options: [
                {
                  label: "No Margins",
                  value: "margins__none",
                },
                {
                  label: "Basic / In-content Margins",
                  value: "margins__inContent",
                },
                {
                  label: "Margins Top & Bottom",
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

            marginselect !== "margins__none"
              ? marginselect !== "margins__inContent"
                ? el(ToggleControl, {
                    label: "Double Margins?",
                    checked: margindouble,
                    onChange: () =>
                      setAttributes({
                        margindouble: margindouble ? "" : "margins__double",
                      }),
                  })
                : null
              : null
          ),

          el(
            PanelBody,
            {
              title: "Styling Controls",
            },

            el(ToggleControl, {
              label: "Narrow Content?",
              help: "Sets the column width to match narrow text content.",
              checked: narrowcontent,
              onChange: () =>
                setAttributes({
                  narrowcontent: narrowcontent ? "" : "content__narrow",
                }),
            }),

            el(ToggleControl, {
              label: "Reverse order on mobile?",
              help: "When on mobile devices the order of stacked items will be reversed.",
              checked: reverseorder,
              onChange: () =>
                setAttributes({
                  reverseorder: reverseorder ? "" : "columns__reverse",
                }),
            }),

            columnselect === 2 &&
              el(RadioControl, {
                label: "Offset columns?",
                help: "For a design choice, the columns can be offset. This option is only available for 2 column layouts.",
                selected: columnoffset,
                options: [
                  {
                    label: "No offset",
                    value: "",
                  },
                  {
                    label: "60 / 40",
                    value: "columns__offset--6040",
                  },
                  {
                    label: "40 / 60",
                    value: "columns__offset--4060",
                  },
                ],
                onChange: (value) => setAttributes({ columnoffset: value }),
              })
          )
        ),

        el(
          "div",
          { className: "columns__container" },

          el(InnerBlocks, {
            allowedBlocks: allowedBlocks,
          })
        )
      );
    },

    save: function () {
      return el(InnerBlocks.Content, {});
    },
  });
})(window.wp);
