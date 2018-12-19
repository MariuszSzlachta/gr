# groupBy

## What's this?

This is functions that groups records in table by key. If key doesn't exist throws exception.


## How to develop.

*Important: I have created two wersion of this function.*
v1: shows items in array that don't contain searched key. They are store under key of 'undefined' *this version is default*
v2: hides items in array that don't contain searched key. *to use this version uncomment proper lines in source file and build*

1. unzip project
2. open terminal inside unziped folder
3. in terminal type `npm install` to create development environment
4. open in your favorite IDE `group.js` from `src` folder
5. modify code as you like
6. when you finish probably you want to make production version of your code. I prepared some helpful scripts for you.
  - `npm run clean` - removes all files from `public` directory in another words from place where your production version will occur
  - `npm run build:node` - this command transpile ES6+ code to more understandable ES5 version for your node ecosystem. In addition it creates module for you, that you can import in your node scripts.
  - `npm run build:web` - creates a version on our function you can use in browsers.


## How to use.

### DEMO

I've created for you two demonstrations. You can find them in demo folder.

If you want to run browser version just open browsers/demo.html in your browser and open devtools and watch on console. Don't forget to see demo.html source code to see how you can call groupBy function in your browser.

If you want to run node.js version open terminal inside node catalog and hit `node demo.js` and don't forget to see `demo.js` source there you can find an example.

### Node.js

1. Create build using instructions above if folder `public` is empty.
2. Copy groupBy.node.bundle.min.js from `public` catalog to your project.
3. In your node.js file import module with groupBy function. Aware of proper path.
  `const groupBy = require('/path_to_folder_where_you_coppied_groupBy/gropuBy.node.bundle.min.js');`
4. call your function `groupBy.groupBy(array, 'key')`. first parameter is an array you want to change and second parameter is a key you want to sort on.

### Browsers

1. Create build using instructions above if folder `public` is empty.
2. Copy groupBy.bundle.min.js from `public` catalog to your project.
3. Inside your html file create `<script src="./path_to_folder_where_you_coppied_groupBy/groupBy.bundle.min.js></script>` tag and as `src` type path to groupBy file.
4. call your function `groupBy(array, 'key')`. first parameter is an array you want to change and second parameter is a key you want to sort on.