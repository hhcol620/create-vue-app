const fs = require('fs');
const { resolve } = require('path');
const handlebars = require('handlebars');
const glob = require('glob');

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

function rewritePackage(filePath, data) {
    const exportsContent = require(process.cwd() + '/' + filePath);
    console.log(exportsContent);
    console.log('cwd       : ' + process.cwd());
}

/**
 * @params :
 * @return :
 * @description : 先获取项目中所有的css less  或者是scss  sass 文件 根据用户选择重写样式文件后缀名
 * @date : 2021-03-10 19:05
 * @author : huanghe
 */
function rewriteExtname(name, extname) {
    glob.sync(
        process.cwd() + '/' + name + '/src/**/*.{less,scss,sass,css}'
    ).forEach((filePath) => {
        let newPath = filePath.replace(/(?<=\.)(less|scss|sass|css)$/, extname);
        fs.rename(filePath, newPath, (err) => {
            if (err) throw err;
        });
    });
}

module.exports = { rewriteFile, rewritePackage, rewriteExtname };
