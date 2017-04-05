var gulp = require('gulp');

__workDir = __dirname;
__devTool = 'source-map';
__host = '127.0.0.1';
__port = 8080;
__alias = {
    "assets":__workDir + "/src/common/assets/",
    "src":__workDir + "/src/",
    'react': 'inferno-compat',
    'react-dom': 'inferno-compat'
};

require('@fabalous/runtime-web/config/gulp/RuntimeWeb.config')(gulp);