(function (wp) {
  const registerBlockType = wp.blocks.registerBlockType;
  const el = wp.element.createElement;
  const __ = wp.i18n.__;
  const { Button } = wp.components;
  const { useBlockProps, RichText, MediaUpload, InnerBlocks } = wp.blockEditor;
  const allowedBlocks = ["core/button"];
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
    attributes: {
      pretitle: {
        type: "string",
        default: "",
      },
      title: {
        type: "string",
        default: "",
      },
      introduction: {
        type: "string",
        default: "",
      },
      mediaid: {
        type: "number",
        default: "",
      },
      mediaurl: {
        type: "string",
        default: "",
      },
    },
    parent: ["wpboiler-core/hero"],

    edit: function (props) {
      const { attributes, setAttributes } = props;
      const { pretitle, title, introduction, mediaid, mediaurl } = attributes;

      const onSelectImage = (media) => {
        setAttributes({
          mediaid: media.id,
          mediaurl: media.url,
        });
      };

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

          // BACKGROUND IMAGE PREVIEW
          mediaid &&
            el("img", {
              className: `${blockName}__image`,
              src: mediaurl,
            }),

          el(
            "div",
            { className: `${blockName}__container` },

            // PRE TITLE
            el(RichText, {
              tagName: "h3",
              placeholder: "Enter a pre-title here",
              className: `${blockName}__title--pre`,
              value: pretitle ? pretitle : "",
              onChange: (value) => setAttributes({ pretitle: value }),
            }),

            // TITLE
            el(RichText, {
              tagName: "h1",
              placeholder: "Enter a title here",
              className: `${blockName}__title`,
              value: title ? title : "",
              onChange: (value) => setAttributes({ title: value }),
            }),

            // INTRODUCTION
            el(RichText, {
              tagName: "p",
              placeholder: "Enter an introduction here",
              className: `${blockName}__title--intro`,
              value: introduction ? introduction : "",
              onChange: (value) => setAttributes({ introduction: value }),
            }),

            // CONTENT
            el(
              "div",
              {
                className: `${blockName}__content`,
              },

              el(InnerBlocks, {
                allowedBlocks: allowedBlocks,
              })
            ),

            // IMAGE UPLOAD
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
                  __("Remove Image", `${blockName}`)
                )
              : ""
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
