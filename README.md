# creat-vue-app
### 自动化构建工具之create-vue-app的设计与实现

* dev-server

* 能够处理下面这些文件  所需loader

  | vue-template | css                     | js           | less                     | scss/sass                | img                              | font        |
  | ------------ | ----------------------- | ------------ | ------------------------ | ------------------------ | -------------------------------- | ----------- |
  | Vue.js       | Css.loader style.loader | babel.loader | Less.loader style.loader | Sass.loader style.loader | file-loader image-webpack-loader | file.loader |

* Vue-router在页面模块较多的情况下的配置

* Vuex  在项目中基本使用,和一些稍微复杂的demo

* vue组件间的其他三种传值demo  父传子  子传父 兄弟组件间值得传递(这个主要使用在依赖传递的值模块较少的情况下共享数据,eventBus)

* 组件库引入 pc端 element-ui antDesign  移动端h5 vant-ui mint-ui antDesign-mobile

* 开发阶段的本地代理(开发阶段处理跨域问题)

* 开发中常用的js方法,比如时间格式化方法,localstorage整体的一个处理,cookie的处理,节流防抖函数以及使用demo.

* axios的封装(可以根据不同环境下使用不同的代理或者是其他的需要根据不同的环境后端提供的接口中需要添加不同的字段)

* 尽量能在生产模式下可以直接将打包好的文件自动到cdn,这样的话可以仅仅将html文件放到自己的服务器上就可以了(自己的服务器基本是只提供接口的访问就行,节省带宽)

  ### 以下是脚手架用到的一些插件和工具

  | 工具名称          | 作用                     | 参考地址                                                     |
  | ----------------- | ------------------------ | ------------------------------------------------------------ |
  | commander         | 命令编写                 | https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md |
  | download-git-repo | 下载git模板              | https://www.npmjs.com/package/download-git-repo              |
  | inquirer          | 命令行交互，获取用户输入 |                                                              |
  | ora               | 进度条                   |                                                              |
  | chalk             | 让输出带颜色             | https://www.npmjs.com/package/chalk                          |
  | handlebars        | 模板化语言               | https://www.npmjs.com/package/handlebars                     |
  | cFonts            | 特殊文字                 |                                                              |
  | metalsmith        | 模板                     | https://www.npmjs.com/package/metalsmith                     |
  | log-symbols       | 错误标记                 | https://www.npmjs.com/package/log-symbols                    |

  ### 模板使用到的插件和工具

  | 插件名称 | 作用 | 文档地址 |
  | -------- | ---- | -------- |
  |          |      |          |
  |          |      |          |
  |          |      |          |
  |          |      |          |
  |          |      |          |
  |          |      |          |
  |          |      |          |
  |          |      |          |
  |          |      |          |

  ### 下阶段的工作
 * 将交互命令和模板链接起来,根据用户的选择和输入能做一些用户自定义的配置  
 * 将pc端的ts版本抓紧时间搞出来(顺便搞一下ts)
 * 有时间熟悉一下@vue/cli的可视化界面的交互,争取给脚手架也做一个自定义的可视化页面
 * 有时间的话搞一下h5端
  * h5端 (js 和 ts 两个版本 针对移动端屏幕和常用的交互指定相应的结构和工具函数)



