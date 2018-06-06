'use strict';

const HexoUuid = require('./lib/hexo-uuid');

hexo.on('new', HexoUuid.newPost);

// new_post_path 要提升优先级5，默认是10
hexo.extend.filter.register('new_post_path', HexoUuid.new_post_path, 5);
hexo.extend.filter.register('before_post_render', HexoUuid.before_renderPost);
