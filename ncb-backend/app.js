var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var fetchAudios = require('./routes/media/audio/audios/AllFromSheet');
var fetchAudiosWithSecret = require('./routes/media/audio/audios/AllFromSheetWithSecret')
var fetchAudioWithSecret = require('./routes/media/audio/audios/SingleFromSheetWithSecret')
var fetchSoundEffects = require('./routes/media/soundEffect/soundEffects/AllFromSheet');
var fetchVideoFootages = require('./routes/media/videoFootage/videoFootages/AllFromSheet');


var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(cors());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use('/fetch-audios', fetchAudios);
app.use('/fetch-audios-with-secret', fetchAudiosWithSecret);
app.use('/fetch-audio-with-secret', fetchAudioWithSecret);
app.use('/fetch-sound-effects', fetchSoundEffects);
app.use('/fetch-video-footages', fetchVideoFootages);




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
