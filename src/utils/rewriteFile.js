const fs = require('fs');
const { resolve } = require('path');
const handlebars = require('handlebars');

/**
 * @params : filePath 文件路径 data 传入到文件中的对象
 * @return : 将数据写入到模板文件  重写文件
 * @description :
 * @date : 2020-12-27 15:01
 * @author : hhcol_JS
 */

function rewriteFile(filePath, data) {
    const fileContent = fs.readFileSync(filePath).toString();
    const result = handlebars.compile(fileContent)(data);
    fs.writeFileSync(filePath, result);
}

function rewriteWebpackConfig(filePath, data) {
    const exportsContent = require(process.cwd() + '/' + filePath);
    console.log(exportsContent);
    console.log('cwd       : ' + process.cwd());
}

module.exports = { rewriteFile, rewriteWebpackConfig };
