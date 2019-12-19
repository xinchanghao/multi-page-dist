# 多入口项目，动态打包 demo

## multi-page

### 最初思路（写文件，动态配置入口）

https://github.com/ChhXin/multi-page-dist/tree/version1

### 优化后的（shell 脚本，设定环境变量）

https://github.com/ChhXin/multi-page-dist/tree/version2

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

### webpack 打包， npm run build +（项目名）

```
npm run build all
```

or

```
npm run build
```

or

```
npm run build projectA  //启动 projectA
```
