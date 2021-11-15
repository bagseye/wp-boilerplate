(function (wp) {
  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;

  const { PanelBody, Button } = wp.components;
  const { useBlockProps, RichText, InspectorControls, MediaUpload } =
    wp.blockEditor;

  registerBlockType("wpboiler-core/promo-group-item", {
    apiVersion: 2,
    title: __("Promo Group Item", "promo-group-item"),
    description: __(
      "A single promo group card. This is only available within a promo group block",
      "promo-group-item"
    ),
    category: "widgets",
    icon: "grid-view",
    supports: {
      html: false,
    },
    attributes: {
      mediaID: {
        type: "number",
        default: "",
      },
      mediaURL: {
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
      const { title, content, mediaID, mediaURL } = attributes;

      const onSelectImage = (media) =>
        setAttributes({
          mediaID: media.id,
          mediaURL: media.url,
        });

      return el(
        "article",
        useBlockProps(attributes),

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
              value: mediaID,
              render: (obj) => {
                return el(
                  Button,
                  {
                    className: "components-button is-primary",
                    onClick: obj.open,
                  },
                  !mediaID
                    ? __("Upload Image", "card-group")
                    : __("Replace Image", "card-group")
                );
              },
            }),

            mediaID
              ? el(
                  Button,
                  {
                    className: "components-button is-tertiary",
                    style: { marginLeft: "5px" },
                    onClick: () =>
                      setAttributes({
                        mediaID: "",
                        mediaURL: "",
                      }),
                  },
                  "Remove Image"
                )
              : ""
          )
          // IMAGE UPLOAD END
        ),

        el(
          "div",
          { className: "promogroupitem__container" },

          mediaURL
            ? el(
                "div",
                { className: "promogroupitem__media" },

                el("img", {
                  className: `promogroupitem__media--img wp-image-${mediaID}`,
                  src: mediaURL,
                })
              )
            : "",

          el(
            "div",
            { className: "promogroupitem__text" },

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
      );
    },

    save: function () {
      return null;
    },
  });
})(window.wp);
