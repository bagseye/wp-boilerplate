(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;

  const { PanelBody, Button } = wp.components;
  const { useBlockProps, RichText, InspectorControls, MediaUpload } =
    wp.blockEditor;
  const blockName = "promo-group-item";

  registerBlockType("wpboiler-core/promo-group-item", {
    apiVersion: 2,
    title: __("Promo Group Item", `${blockName}`),
    description: __(
      "A single promo group card. This is only available within a promo group block",
      `${blockName}`
    ),
    category: "widgets",
    icon: "grid-view",
    supports: {
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
      title: {
        type: "string",
        default: "",
      },
      content: {
        type: "string",
        default: "",
      },
    },
    parent: ["wpboiler-core/promo-group"],

    edit: function (props) {
      const { attributes, setAttributes } = props;
      const { title, content, mediaid, mediaurl } = attributes;

      const onSelectImage = (media) =>
        setAttributes({
          mediaid: media.id,
          mediaurl: media.url,
        });

      return el(
        "article",
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
            el("p", {}, __("Promo Group Item", `${blockName}`))
          )
          // END .titleArea--name
        ),
        // END .titleArea

        el(
          InspectorControls,
          null,

          // IMAGE UPLOAD BEGIN
          el(
            PanelBody,
            {
              title: "Background Image",
            },

            el(MediaUpload, {
              onSelect: onSelectImage,
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
                    ? __("Upload Image", `${blockName}`)
                    : __("Replace Image", `${blockName}`)
                );
              },
            }),

            mediaid
              ? el(
                  Button,
                  {
                    className: "components-button is-tertiary",
                    style: { marginLeft: "5px" },
                    onClick: () =>
                      setAttributes({
                        mediaid: "",
                        mediaurl: "",
                      }),
                  },
                  "Remove Image"
                )
              : ""
          )
          // IMAGE UPLOAD END
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

              mediaurl
                ? el(
                    "div",
                    { className: `${blockName}__media` },

                    el("img", {
                      src: mediaurl,
                    })
                  )
                : "",

              el(
                "div",
                { className: `${blockName}__text ` },

                el(RichText, {
                  tagName: "h2",
                  placeholder: "Add a title here...",
                  className: "promogroupitem__title",
                  value: title ? title : "",
                  onChange: (value) => setAttributes({ title: value }),
                }),

                el(RichText, {
                  tagName: "p",
                  placeholder: "Add your content here...",
                  className: "promogroupitem__content",
                  value: content ? content : "",
                  onChange: (value) => setAttributes({ content: value }),
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
