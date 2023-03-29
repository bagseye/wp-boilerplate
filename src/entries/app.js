import carousel from '../js/module/carousel';

import '../scss/base/_normalize.scss';

// Global
// import '../scss/helper/_typography-defaults.scss';

// Home
import '../../gutenberg/hero/style.scss';

// Editor
import '../scss/editor/_editor-styles.scss';

// Single
import '../scss/elements/_author.scss';
import '../scss/elements/_categories.scss';
import '../scss/helper/_container-large.scss';
import '../scss/elements/_footer.scss';
import '../scss/helper/_grid.scss';
import '../scss/pages/_single.scss';
import '../scss/elements/_published.scss';
import '../scss/helper/_typography-standard.scss';
import '../scss/elements/_btn.scss';

// Init
carousel();

if(module.hot) {
  module.hot.accept();
}