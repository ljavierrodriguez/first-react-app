### Step 1
    $ npm init -y

### Step 2
    $ npm i path react react-dom babel-loader @babel/core @babel/preset-react @babel/preset-env @babel/plugin-proposal-class-properties style-loader css-loader file-loader --save

### Step 3
    $ npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin

### Step 4
Make the next files:

    -- .babelrc
    -- .gitignore
    -- src/index.js
    -- public/index.html
    -- webpack.config.js

### Step 5 
Add to the ***package.json*** file
    
    "scripts": {
        ...
        "start": "webpack-dev-server --mode=development",
        "build": "webpack --mode=production",
        ...
    }

### Step 6 
Add this code to the ***.babelrc*** file.

    {
        "presets": [
            [ 
                "@babel/preset-env", {
                "modules": false,
                "targets": {
                "browsers": [
                "last 2 Chrome versions",
                "last 2 Firefox versions",
                "last 2 Safari versions",
                "last 2 iOS versions",
                "last 1 Android version",
                "last 1 ChromeAndroid version",
                "ie 11"
                ]
                }
            } ],
            "@babel/preset-react"
        ],
        "plugins": [ "@babel/plugin-proposal-class-properties" ]
    }

### Step 7
Add this code to the ***webpack.config.js***

    const HtmlWebPackPlugin = require('html-webpack-plugin');
    const webpack = require('webpack');
    const path = require('path');
    module.exports = {
        context: __dirname,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main.js',
            publicPath: '/',
        },
        devServer: {
            historyApiFallback: true
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                }, // for js or jsx files
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                }, // for css files
                {
                    test: /\.(png|j?g|svg|gif)?$/,
                    use: 'file-loader'
                }, // for images files
                { 
                    test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, 
                    use: ['file-loader'] 
                }  // for fonts
            ],
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: path.resolve(__dirname, 'public/index.html'),
                filename: './index.html'
            }),
            new webpack.HotModuleReplacementPlugin()
        ]
    };

### Step 8.0 (Optional)
Install ***Jquery***, ***popper.js*** and ***font-awesome***

    $ npm i jquery popper.js bootstrap font-awesome --save-dev // 4.x

    $ npm i jquery popper.js bootstrap @fortawesome/fontawesome-free@5.1.0-9 --save-dev // 5.x


### Step 8.1
Add this code to the ***webpack.config.js*** file.

    plugins: [
            ...
            new webpack.ProvidePlugin({
                '$': "jquery",
                'jQuery': "jquery",
                'Popper': 'popper.js'
            }),
            ...
    ]

### Step 8.2
Add this code to de ***src/index.js*** file

    // Add css files
    import 'bootstrap/dist/css/bootstrap.min.css';
    //import 'font-awesome/css/font-awesome.min.css'; // 4.x
    import '@fortawesome/fontawesome-free/css/all.css'; // 5.x


    // Add js files
    import 'jquery';
    import 'popper.js';
    import 'bootstrap';

### Step 9
Go to ***http://gitignore.io*** and search VisualStudioCode and React and generate content then copy the text and paste at the ***.gitignore*** file in the project.

### Step 9.1
Execute ***git*** command to make a new repository

    $ git init
    $ git add -A
    $ git commit -m "your message"
    $ git remote add origin (your path to remote repository)
    $ git push origin master

### Step 10 
Go to the ***public/index.html*** and write the next code:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
    </html>


### Step 11
Edit ***src/index.js*** with the next code

    import React from 'react';
    import ReactDOM from 'react-dom';

    // Add css files
    import 'bootstrap/dist/css/bootstrap.min.css'; // CSS from Bootstrap
    import 'font-awesome/css/font-awesome.min.css'; // CSS from FontAwesome
    import './index.css'; // My own CSS

    // Add js files
    import 'jquery';
    import 'popper.js';
    import 'bootstrap';


    const Home = (props) => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <i className="fa fa-html5 fa-5x"></i>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <p className="text-success">Welcome to Webpack, Bootstrap and ReactJS</p>
                    </div>
                </div>
            </div>
        )
    }

    ReactDOM.render(<Home />, document.querySelector("#root"));

### Step 12
Make a ***src/index.css*** file with the next code:

    body {
        background-color: #3f4455;
    }


### Step 13
Execute the next code in the terminal or console

    $ npm run start

and open in the navigator the next page ***http://localhost:8080/***

### Step 14
To put your site in production (hosting) execute the next code:

    $ npm run build

and put the content of folder ***dist*** in the server.

### Step 15 (Optional)
To test the site like production do the next

    $ npx serve -s dist