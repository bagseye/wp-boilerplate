(function (wp) {
  const {registerBlockType, createBlock} = wp.blocks;
  const {__} = wp.i18n;
  const {createElement: el} = wp.element;
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
      slidestate: {
        type: "string",
        default: 0,
      },
    },
    parent: ["wpboiler-core/hero"],

    edit: function (props) {
      const { attributes, setAttributes } = props;
      const { pretitle, title, introduction, mediaid, mediaurl, slidestate } =
        attributes;

      const onSelectImage = (media) => {
        setAttributes({
          mediaid: media.id,
          mediaurl: media.url,
        });
      };

      const onChangeSlideState = () => {
        setAttributes({
          slidestate: slidestate ? 0 : 1,
        });
      };

      return el(
        "div",
        useBlockProps(attributes),

          // PREVIEW AREA BEGIN
          el(
            "div",
            { className: `hero__slide ${mediaid ? 'hero__slide--has-media' : ''}` },

            el(
              "div",
              { className: `hero__container--content h-container-large` },

              el(
                "div",
                { className: `hero__slide--content` },

                // PRE TITLE
                el(RichText, {
                  tagName: "h3",
                  placeholder: "Enter a pre-title here",
                  className: `hero__title--pre`,
                  value: pretitle ?? "",
                  onChange: (value) => setAttributes({ pretitle: value }),
                }),

                // TITLE
                el(RichText, {
                  tagName: "h1",
                  placeholder: "Enter a title here",
                  className: `hero__title`,
                  value: title ?? "",
                  onChange: (value) => setAttributes({ title: value }),
                }),

                // INTRODUCTION
                el(RichText, {
                  tagName: "h2",
                  placeholder: "Enter an introduction here",
                  className: `hero__introduction`,
                  value: introduction ?? "",
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
                  }),

                  el(
                    "div",
                    {
                      className: `hero__content--actions`,
                    },

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
                ),
              ),

                                      // BACKGROUND IMAGE PREVIEW
                                      mediaid &&
                                      el("img", {
                                        className: `hero__slide--media`,
                                        src: mediaurl,
                                      }),
            ),

          )
      );
    },

    save: function () {
      return el(InnerBlocks.Content, {});
    },
  });
})(window.wp);
