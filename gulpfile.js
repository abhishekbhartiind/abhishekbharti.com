const gulp = require("gulp")
const imagemin = require("gulp-imagemin")
const uglify = require("gulp-uglify")
const cssnano = require("gulp-cssnano")
const minifyCSS = require("gulp-minify-css")
const concat = require("gulp-concat")
const rename = require("gulp-rename")
const browserSync = require("browser-sync").create()
const autoprefix = require("gulp-autoprefixer")
const minify = require("gulp-minify")

const DIST = "dist/"
const DIST_IMG = DIST + "img/"
const DIST_CSS = DIST + "css/"
const DIST_JS = DIST + "js/"
const DIST_FONTS = DIST + "fonts/"

gulp.task(
  "default",
  ["img", "css", "js", "fonts", "robots", "sitemap"],
  function () {
    console.log("Done!!")
  }
)

gulp.task("browserSync", function () {
  browserSync.init({
    server: {
      baseDir: "static/dist/",
    },
  })
})
gulp.task("img", function () {
  return gulp
    .src("static/img/**/*.+(png|jpg|gif|svg)")
    .pipe(
      imagemin([
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({ plugins: [{ removeViewBox: true }] }),
      ])
    )
    .pipe(gulp.dest(DIST_IMG))
})

gulp.task("css", function () {
  return gulp
    .src([
      "static/css/animate.css",
      "static/css/bootstrap.min.css",
      "static/css/et-line-font.css",
      "static/css/prettyPhoto.css",
      "static/css/slick.css",
      "static/css/slidebars.min.css",
      "static/css/styles.css",
    ])
    .pipe(minifyCSS())
    .pipe(concat("abhi.css"))
    .pipe(gulp.dest(DIST_CSS))
})

gulp.task("js", function () {
  return gulp
    .src([
      "static/js/bootstrap.min.js",
      "static/js/google-map.js",
      "static/js/imagesloaded.pkgd.min.js",
      "static/js/inview.min.js",
      "static/js/isotope.pkgd.min.js",
      "static/js/jquery.easing.min.js",
      "static/js/jquery.prettyPhoto.js",
      "static/js/jquery.waypoints.min.js",
      "static/js/modernizr.js",
      "static/js/scripts.js",
      "static/js/firebase.js",
      "static/js/slick.min.js",
      "static/js/slidebars.min.js",
    ])
    .pipe(uglify())
    .pipe(concat("abhi.js"))
    .pipe(gulp.dest(DIST_JS))
})

gulp.task("fonts", function () {
  return gulp.src(["static/fonts/**/*"]).pipe(gulp.dest(DIST_FONTS))
})

gulp.task("robots", function () {
  return gulp.src(["static/robots.txt"]).pipe(gulp.dest(DIST))
})

gulp.task("sitemap", function () {
  return gulp.src(["static/sitemap.xml"]).pipe(gulp.dest(DIST))
})
