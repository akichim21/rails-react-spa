const DEBUG = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined;

module.exports = {
  cache: DEBUG,
  debug: DEBUG,
  devtool: DEBUG ? 'inline-source-map' : false,
  entry: {
    Todo: "./javascripts/components/Todo.js"
  },
  output: {
    path: '../app/assets/javascripts/components',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-2'
      },
      { test: /\.json$/, loader: 'json' }
    ]
    //preLoaders: [
    //  {
    //    test: /\.jsx?$/,
    //    exclude: /node_modules/,
    //    loader: "eslint-loader"
    //  }
    //]
  },
  eslint: {
    configFile: './.eslintrc.json'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'json'],
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
}

