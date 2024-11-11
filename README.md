2024-11-11

# nuxt3 + vue3 + pinia + typescript + vueuse + nuxt-ui + nuxt-i18n + eslint + prettier的项目模板

## 启动项目

1. ```npm i```安装项目依赖
2. ```npm run dev```启动项目
3. 等待项目启动完毕就可以访问 http://localhost:3000 了

## 项目目录介绍

### ```src/pages```页面路由目录

```src/pages/index.vue```这个文件是一定存在的，他是首页。

```app.vue```文件里面的```<NuxtPage></NuxtPage>```默认加载的就是```src/pages/index.vue```这个组件

**[FAQ]** 那么我们在pages里面新建了不是index.vue的文件我们应该如何访问到呢？他在Nuxt中的加载策略是如何的？
> 例如我们新建一个```src/pages/list.vue```我们想要访问它时的url就是```http://localhost:3000/list```这就是Nuxt中```pages```目录里面的vue文件的加载策略

**[FAQ]** 我们如何新增多个页面动态路由？动态路由 顾名思义就是这个路由地址是可变的，是动态的；使用场景一般就是文章的详细页，因为一般一篇文章会有对应的一个 id，那这个 id 就是动态的；那如何去实现呢？
> 新建 ```src/pages/[id]``` 目录（目录名一定要是 ```[id]```），也就是这样```src/pages/[id]/index.vue``` ，这里的```[id]```我们是需要替换为我们想要动态的目录名字，例如我们```[id]```的值是```111```，那么我们后面访问它就是```http://localhost:3000/111```

### 其他目录的介绍

**更多目录的用途介绍请参考链接：https://juejin.cn/post/7170746000112353293#heading-13**

## 项目依赖介绍

本项目依赖如下：
1. ```vueuse```vue网页开发中常用的功能js函数库，它内部是```composation api```形式的
2. ```pinia```全局状态存储库
3. ```@nuxt/ui```一个对SSR非常友好的Nuxt官方UI库，内部默认内置了```tailwind css```
4. ```@nuxtjs/i18n```一个对SSR友好的Nuxt官方的i18n库
5. ```nuxt```vue的SSR框架
