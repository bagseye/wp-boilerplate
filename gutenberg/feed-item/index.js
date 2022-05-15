(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;
  var useBlockProps = wp.blockEditor.useBlockProps;
  var ComboboxControl = wp.components.ComboboxControl;
  const blockName = "feed-item";

  registerBlockType("wpboiler-core/feed-item", {
    apiVersion: 2,
    title: __("Feed Item", `${blockName}`),
    description: __("An individual post item", `${blockName}`),
    category: "widgets",
    icon: "pressthis",
    supports: {
      html: false,
    },
    attributes: {
      postID: {
        type: "number",
      },
    },
    parent: ["wpboiler-core/feed"],

    getEditWrapperProps(props) {
      return {
        "data-size": props.Size,
      };
    },

    edit: function (props) {
      const { attributes, setAttributes } = props;
      const { postID } = attributes;

      const decodeHtml = function (html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
      };

      let datalistOptions = [];
      wpboilerPosts.forEach((elm) => {
        datalistOptions.push({
          value: elm.ID,
          label: decodeHtml(elm.Title),
        });
      });

      return el(
        "div",
        useBlockProps(),

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
            el("p", {}, __("Feed Item", `${blockName}`))
          )
          // END .titleArea--name
        ),
        // END .titleArea

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
                "div",
                { className: `${blockName}__container--select` },

                el(ComboboxControl, {
                  onChange: (val) => setAttributes({ postID: val }),
                  onInputChange: (inputValue) => {
                    return setFilteredOptions(
                      datalistOptions.filter((option) => {
                        return option.label
                          .toLowerCase()
                          .startsWith(inputValue.toLowerCase());
                      })
                    );
                  },
                  label: "Select a post from the list...",
                  hideLabelFromVision: false,
                  autoComplete: "off",
                  className: `${blockName}__item--selectlink`,
                  options: datalistOptions,
                  value: postID ? postID : "",
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
