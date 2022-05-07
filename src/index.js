import 'grapesjs';

import { blocks } from './blocks';

export default grapesjs.plugins.add('gjs-plugin-sample', (editor, opts = {}) => {
  let config = opts;

  let defaults = {
    blocks: ['link-blocks', 'quote', 'text-basic'],
  };

  for (let name in defaults) {
    if (!(name in config)) config[name] = defaults[name];
  }
  blocks(editor, config);
});
