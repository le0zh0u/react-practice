# React-Practice — Counter

It is a example for react and redux. It use react, webpack, redux and express to build a front-end server. And It is just using count increment, decrement, increment if odd and increment after 1 secound. It simple, but It is good for learning basic knowledge about react, redux, webpack and express, and to know how they works together.



I follow the guide named [react+redux教程（一）connect、applyMiddleware、thunk、webpackHotMiddleware](http://www.cnblogs.com/lewis617/p/5145073.html) , but it is old. If using `npm install` modules one by one (not copy from its github example), it will failed when webpack building, it has something changed.



It needs to be modified using follow codes in webpack.config.js:

```javascript
module: {
    loaders: [
      {
        test: /\.js$/,
        loader:  'babel-loader' ,
        exclude: /node_modules/,
        include: __dirname,
        query:
                {
                  presets:['react','es2015']
                }
      }
    ]
  }
```



Be existed to finish it!
