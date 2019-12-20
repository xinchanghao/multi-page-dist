# 多入口项目，动态打包 demo

## multi-page

### 最初思路（写文件，动态配置入口）

https://github.com/ChhXin/multi-page-dist/tree/version1

### 优化后的（shell 脚本，设定环境变量）

https://github.com/ChhXin/multi-page-dist/tree/version2

不足之处，由于使用了 shell 脚本，对使用 windows 环境开发不是十分友好！！

### devServer 启动，npm start +（项目名）

```
npm start all
```

or

```
npm start
```

or

```
npm start projectA  //启动 projectA
```

### webpack 打包， npm run dist +（项目名）

```
npm run dist all
```

or

```
npm run dist
```

or

```
npm run dist projectA  //启动 projectA
```
