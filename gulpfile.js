var gulp=require('gulp');
var sass=require('gulp-sass');
var server=require('guip-webserver');

gulp.task('/', function() {
    return gulp.src('src')
        .pipe(server({
            port: '8080',
            liverelpad: true,
            proxies: [{
                source: '/select',
                target: 'http://localhost:3000/selsct'
            }]
        }))
})