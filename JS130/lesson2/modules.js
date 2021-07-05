// Modules
// CommonJS

// // single export
// function logIt(string) {
//   console.log(string);
// }

// module.exports = logIt;

// multiple exports
let prefix = '>> ';

function logIt(string) {
  console.log(`${prefix}${string}`);
}

function setPrefix(newPrefix) {
  prefix = newPrefix;
}

module.exports = {
  logIt,
  setPrefix,
}

// CommonJS Variables
console.log(module);
// Module {
//   id: '<repl>',
//   path: '.',
//   exports: {},
//   parent: undefined,
//   filename: null,
//   loaded: false,
//   children: [],
//   paths: [
//     '/Users/wolfy/JS/repl/node_modules',
//     '/Users/wolfy/JS/node_modules',
//       ...
//     '/usr/local/Cellar/node/12.6.0/lib/node'
//   ]
// }
console.log(require);
// [Function: require] {
//   resolve: [Function: resolve] { paths: [Function: paths] },
//   main: Module {
//     // same as `module` object
//   },
//   // some other stuff
// }
console.log(exports);
// {}
// (no exports at the main program level)
console.log(__dirname); // pathname of directory that contains module
console.log(__filename); // pathname of the file that contains the module