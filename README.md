# Interval Map Container 
This Node.js/React.js application maps intervals of class K to values of an arbitrary class V. The interval class K only uses comparison operators. <br>
My approach uses a binary tree structure. By utilizing a binary tree we can run the insert and retrieve functions recursively in O(log(N)) time. This is better than looping over an entire array in O(N) time. <br> 
Newly inserted intervals override any existing intervals in that range. The lower interval bound is included and the upper is excluded. <br> 
Retrieval takes a number as input, searches the binary tree, and returns the value that corresponds to the given interval the number falls within. 

# Software Dependencies: 
* Node.js https://nodejs.org/en/download/ 
* * NPM https://www.npmjs.com/ 

# To install and run, use NPM in the package.json directory:

### `npm install` 
### `npm start`

# Or visit the app on Heroku
* https://interval-map.herokuapp.com/ 

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
