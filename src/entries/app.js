console.log('this is app js without 5');

import '../scss/base/_normalize.scss';

// Single
import '../scss/elements/_author.scss';
import '../scss/elements/_categories.scss';
import '../scss/helper/_container-large.scss';
import '../scss/elements/_footer.scss';
import '../scss/helper/_grid.scss';
import '../scss/pages/_single.scss';
import '../scss/elements/_published.scss';
import '../scss/helper/_typography-standard.scss';

// Enable HMR
// if (module.hot) {
//   module.hot.accept('../scss/elements/_footer.scss', function() {
//     console.log('Accepting the updated footer module!');
//   })
// }

if(module.hot) {
  module.hot.accept();
}