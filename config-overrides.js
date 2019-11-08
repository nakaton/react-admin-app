const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
    // For antd, pack the import source only
    fixBabelImports('import', {
        libraryName: 'antd', 
        libraryDirectory: 'es', 
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {'@primary-color': '#1DA57A'},
    }),
);