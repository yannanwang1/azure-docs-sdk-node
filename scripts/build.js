'use strict';

var child_process = require('child_process');
var fse = require('fs-extra');

var apiref = 'docs-ref-autogen';

fse.removeSync(apiref);
child_process.execFileSync('node', ['node_modules/node2docfx/node2docfx.js', 'node2docfx.json']);