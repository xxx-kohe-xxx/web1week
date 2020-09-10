const gulp = require('gulp');
const pug = require('gulp-pug');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');

/**
 * `src`ディレクトリ配下のすべての`.pug`ファイルをコンパイルして`public`へ出力する
 */
gulp.task('pug', function(done) {
  // .pugファイルを読み込む
  gulp.src('./src/**/*.pug')
    .pipe(pug({
      // pugファイルを整形するオプション
      pretty: true
    }))
    // .htmlファイルを出力する
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.reload({stream: true}));
  done();
});

/**
 * `src/scss`ディレクトリ配下のすべての`.scss`ファイルをコンパイルして`public/css`へ出力する
 */
gulp.task('sass', function(done) {
  gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.reload({stream: true}));
  done();
});

/**
 * ローカルサーバーを起動する
 */
gulp.task('browser-Sync', function(done) {
  browserSync({
    server: {
      // プレビューしたいファイルの置いてあるディレクトリを指定
      baseDir: 'public/',
      // プレビューしたいファイルを指定
      index: "index.html"
    }
  });
  done();
});

/**
 * pugファイルの変更を検知してリアルタイムプレビューする
 */
gulp.task('watch', gulp.series(gulp.parallel('pug', 'sass', 'browser-Sync'), function(done) {
  gulp.watch('./src/**/*.pug', gulp.task('pug'));
  gulp.watch('./public/js/app.js', gulp.task('pug'));
  gulp.watch('./src/scss/*.scss', gulp.task('sass'));
  done();
}));