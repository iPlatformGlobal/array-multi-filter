<!-- TITLE/ -->

<h1>Array Multi Filter</h1>

<!-- /TITLE -->


<!-- DESCRIPTION/ -->

Array helper for filtering against multiple keys in an array of objects

<!-- /DESCRIPTION -->


<!-- BADGES/ -->

<span class="badge-nodeico"><a href="https://www.npmjs.com/package/@iplatformglobal/array-multi-filter" title="Nodei.co badge"><img src="https://nodei.co/npm/@iplatformglobal/array-multi-filter.png" alt="Nodei.co badge" /></a></span>
<br class="badge-separator" />
<span class="badge-travisci"><a href="http://travis-ci.org/iPlatformGlobal/array-multi-filter" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/iPlatformGlobal/array-multi-filter/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/@iplatformglobal/array-multi-filter" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@iplatformglobal/array-multi-filter.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/@iplatformglobal/array-multi-filter" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/@iplatformglobal/array-multi-filter.svg" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/iPlatformGlobal/array-multi-filter" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/iPlatformGlobal/array-multi-filter.svg" alt="Dependency Status" /></a></span>

<!-- /BADGES -->


## Installation
```
yarn add @iplatformglobal/array-multi-filter or

or

npm install @iplatformglobal/array-multi-filter
```

## Usage

Filter an array of objects against multiple keys and values

```javascript
// Data to be filtered
const arr = [{
  id: 1,
  distance: 100,
  name: 'test',
}, {
  id: 1,
  distance: 100,
  name: 'rest',
}];

// Keys and Values needing to be filtered against
const query = { distance: 100, name: 'test' };

arr.filter(arrayMultiFilter, query);

```
## Testing

Testing is handled by `Jest` and the packages has the following commands setup

* `yarn test`
* `yarn test:watch`

## Contributing

All contributions are welcome, and can be done by cloning the repo and running `yarn install`.

Ensure there are no errors in the tests or linter and ensure your commit messages comply to the following format:

* break: COMMIT_MSG - Changing the code in a way that changes the other users would need to implement it.
* feat: COMMIT_MSG - adding a new feature or capability to the helper.
* fix: COMMIT_MSG - any bugs or minor updates that fixes the existing code without adding or removing any capabilities.
* none: COMMIT_MSG - used for simple updates like documentation, aka NO code has changed.

There are git hooks configured to ensure commit message format as well as test and linter compliance


<!-- HISTORY/ -->

<h2>History</h2>

<a href="https://github.com/iPlatformGlobal/array-multi-filter/releases">Discover the release history by heading on over to the releases page.</a>

<!-- /HISTORY -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2017+ <a href="http://www.iplatform.com">iPlatform</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
