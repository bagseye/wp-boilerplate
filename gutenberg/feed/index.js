(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;

  const { useSelect } = wp.data;
  const { RadioControl, ToggleControl, SelectControl, PanelBody } =
    wp.components;
  const { useBlockProps, RichText, InnerBlocks, InspectorControls } =
    wp.blockEditor;

  registerBlockType("wpboiler-core/feed", {
    apiVersion: 2,
    title: __("Feed", "feed"),
    description: __("Displays latest posts", "feed"),
    category: "design",
    icon: "pressthis",
    supports: {
      html: false,
    },
    attributes: {
      posttype: {
        type: "string",
        default: "custom",
      },
      categoryid: {
        type: "string",
        default: "-1",
      },
      heading: {
        type: "string",
        default: "",
      },
      marginselect: {
        type: "string",
        default: "margins__none",
      },
      doublemargins: {
        type: "string",
        default: "",
      },
    },

    edit: function (props) {
      const { attributes, setAttributes, clientId } = props;
      const { heading, marginselect, doublemargins, posttype, categoryid } =
        attributes;

      const decodeHtml = function (html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
      };

      let datalistOptions = [];
      wpboilerFeedCategories.forEach((elm) => {
        datalistOptions.push({
          value: elm.ID,
          label: decodeHtml(elm.name),
        });
      });

      const onChangeMarginSelect = (value) =>
        setAttributes({ marginselect: value });
      const innerBlockCount = useSelect(
        (select) => select("core/block-editor").getBlock(clientId).innerBlocks
      );

      return el(
        "div",
        useBlockProps(attributes),

        el("p", { className: "block__title" }, __("Feed", "feed")),

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
              onChange: onChangeMarginSelect,
            }),

            marginselect !== "margins__none" &&
              el(ToggleControl, {
                label: "Double Margins?",
                checked: doublemargins,
                onChange: () =>
                  setAttributes({
                    doublemargins: doublemargins ? "" : "margins__double",
                  }),
              })
          )
        ),

        el(
          "section",
          { className: `feed` },

          el(
            "div",
            { className: "feed__container" },

            el(RichText, {
              tagName: "h2",
              placeholder: "Enter a heading here...",
              className: "",
              value: heading ? heading : "",
              onChange: (value) => setAttributes({ heading: value }),
            }),

            el(
              "div",
              { className: "feed__type--select" },

              el(SelectControl, {
                label: "Select the type of feed you want to show",
                value: posttype,
                options: [
                  {
                    label: "Custom",
                    value: "custom",
                  },
                  {
                    label: "Set Category",
                    value: "category",
                  },
                ],
                onChange: (val) => setAttributes({ posttype: val }),
              })
            ),

            posttype === "custom"
              ? el(
                  "div",
                  { className: "feed__container" },

                  el("h4", {}, "Choose Posts to Display (Max. 2)"),

                  innerBlockCount.length >= 2
                    ? el(InnerBlocks, {
                        allowedBlocks: ["wpboiler-core/feed-item"],
                        template: [["wpboiler-core/feed-item"]],
                        templateLock: false,
                        renderAppender: false,
                      })
                    : el(InnerBlocks, {
                        allowedBlocks: ["wpboiler-core/feed-item"],
                        template: [["wpboiler-core/feed-item"]],
                        templateLock: false,
                      })
                )
              : // otherwise, category selection
                el(
                  "div",
                  { className: "feed__type--select" },

                  el(SelectControl, {
                    label: "Category",
                    value: categoryid,
                    options: datalistOptions,
                    onChange: (val) => setAttributes({ categoryid: val }),
                  })
                )
          )
        )
      );
    },

    save: function () {
      return el(InnerBlocks.Content, {});
    },
  });
})(window.wp);
