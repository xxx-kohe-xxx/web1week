const gulp = require('gulp');
const pug = require('gulp-pug');
const browserSync = require('browser-sync');

/**
 * `src`ディレクトリ配下のすべての`.pug`ファイルをコンパイルして`dist`へ出力する
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
gulp.task('watch', gulp.series(gulp.parallel('pug', 'browser-Sync'), function(done) {
  gulp.watch('./src/**/*.pug', gulp.task('pug'));
  gulp.watch('./public/js/app.js', gulp.task('pug'));
  done();
}));

/**
 * pugファイルの変更を検知してリアルタイムプレビューする
 */
gulp.task('watch-pug', function() {
  gulp.watch('./src/**/*.pug', gulp.task('pug'));
});