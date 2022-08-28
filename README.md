# gulp-he
For encoding or decoding HTML entities in your markup.

## Installation
```
npm i @jordindateur/gulp-he
// or
yarn add @jordindateur/gulp-he
```

## Encode


```
gulp.task('encode', function() {
  return gulp.src('./file-entities.html')
    .pipe(entities('encode', opts))
    .pipe(rename('encoded.html'))
    .pipe(gulp.dest('./output/'));
});
```
#### Methods
+ *encode* — encodes, replacing characters to its entity representations.
+ *opts* — pass all possible [he](https://github.com/mathiasbynens/he) options

## Decode

```
gulp.task('decode', function() {
  return gulp.src('./input/with-entities.html')
    .pipe(entities('decode'))
    .pipe(rename('decoded.html'))
    .pipe(gulp.dest('./output'));
});
```
#### Methods
+ *decode* — decodes, replacing entities to characters.
+ *opts* — pass all possible [he](https://github.com/mathiasbynens/he) options

#### Credits
This repository is largerly inspired by [gulp-html-entites](https://github.com/jstnjns/gulp-html-entities) and wouldn't exist without [he](https://github.com/mathiasbynens/he)