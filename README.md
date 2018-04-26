# MyTagalize
A Node.js module that returns the localizes
## Installation
```sh
npm install git+ssh://git@github.com:madroxxx/tagalize.git --save
```
## Usage
### Javascript
```javascript
var tagalize = require('tagalize');
var boys = tagalize.getTagalized('Boy');
```
```sh
Output should be 'Boy-EY'
```
### TypeScript
```typescript
import { getTagalized } from 'tagalize';
console.log(getTagalized('Goose'))
```
```sh
Output should be 'Goose-EY'
```
### AMD
```javascript
define(function(require,exports,module){
  var tagalize = require('tagalize');
});
```
