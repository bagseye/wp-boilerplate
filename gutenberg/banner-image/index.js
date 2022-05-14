(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;
  const { RadioControl, ToggleControl, PanelBody, Button } = wp.components;
  const { useBlockProps, InspectorControls, MediaUpload } = wp.blockEditor;
  const blockName = "banner-image";

  registerBlockType("wpboiler-core/banner-image", {
    apiVersion: 2,
    title: __("Banner Image", `${blockName}`),
    description: __("Displays a full-width image", `${blockName}`),
    category: "design",
    icon: "cover-image",
    supports: {
      // Removes support for an HTML mode.
      html: false,
    },
    attributes: {
      mediaid: {
        type: "number",
        default: "",
      },
      mediaurl: {
        type: "string",
        default: "",
      },
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
      const { marginselect, marginsdouble, mediaid, mediaurl } = attributes;
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
            el("p", {}, __("Banner Image", `${blockName}`))
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
              }),

            el(
              PanelBody,
              {
                title: "Background Image",
              },

              el(MediaUpload, {
                onSelect: (media) => {
                  setAttributes({
                    mediaid: media.id,
                    mediaurl: media.url,
                  });
                },
                allowedTypes: "image",
                value: mediaid,
                render: (obj) => {
                  return el(
                    Button,
                    {
                      className: "components-button is-primary",
                      onClick: obj.open,
                    },
                    !mediaid
                      ? __("Upload Image", "banner-image")
                      : __("Replace Image", "banner-image")
                  );
                },
              }),

              mediaid &&
                el(
                  Button,
                  {
                    className: "components-button is-tertiary",
                    style: { marginLeft: "5px" },
                    onClick: () => setAttributes({ mediaid: "", mediaurl: "" }),
                  },
                  "Remove Image"
                )
            )
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

              mediaid &&
                el("img", {
                  src: mediaurl,
                })
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
