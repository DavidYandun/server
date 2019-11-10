const express = require('express');
const path = require('path');
const createError = require('http-errors');

const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser=require('body-parser');
const cors=require('cors');


const formidable = require("express-formidable");
const fileUpload =require('express-fileupload');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const session = require('express-session');

const app = express();

//temporales
const stickers = require('./api/stickers');
const persons = require('./api/persons');

//users
const rols = require('./api/users/rols');
const users = require('./api/users/users');
const auth = require('./auth/index');
const authMiddleware=require('./auth/middleware');

//identification
const verifications = require('./api/dwc_identification/verifications');
const identifications = require('./api/dwc_identification/identification');

//location
const continent = require('./api/dwc_location/continent');
const waterbody = require('./api/dwc_location/waterbody');
const island = require('./api/dwc_location/island');
const geodeticdatum = require('./api/dwc_location/geodeticdatum');
const georeferenceverificationstatus = require('./api/dwc_location/georefverificationstatus');
const location = require('./api/dwc_location/location');
const country = require('./api/dwc_location/country');
const stateprovince = require('./api/dwc_location/stateprovince');
const county = require('./api/dwc_location/county');
const municipality = require('./api/dwc_location/municipality');


//taxon
//const linneo = require('./api/dwc_taxon/linneo');
const taxonrank = require('./api/dwc_taxon/taxonrank');
const taxonomicstatus = require('./api/dwc_taxon/taxonomicstatus');
const taxon = require('./api/dwc_taxon/taxon');
const kingdom = require('./api/dwc_taxon/kingdom');
const phylum = require('./api/dwc_taxon/phylum');
const clase = require('./api/dwc_taxon/class');
const order = require('./api/dwc_taxon/order');
const family = require('./api/dwc_taxon/family');
const genus = require('./api/dwc_taxon/genus');
const specie = require('./api/dwc_taxon/specie');

//occurrence
const organismquantitytype = require('./api/dwc_occurrence/organismquantitytype');
const lifestage = require('./api/dwc_occurrence/lifestage');
const reproductivecondition = require('./api/dwc_occurrence/reproductivecondition');
const sex = require('./api/dwc_occurrence/sex');
const establishementmeans = require('./api/dwc_occurrence/establishementmeans');
const occurrence = require('./api/dwc_occurrence/occurrence');

//organism
const organism = require('./api/dwc_organism/organism');
//event
const event = require('./api/dwc_event/event');
//divpolitica
const divpolitica = require('./api/dwc_divpolitica/divpolitica');
//recordlevel
const recordlevel = require('./api/dwc_recordlevel/recordlevel');
const basisofrecord = require('./api/dwc_recordlevel/basisofrecord');

//geologicalcontext
const eon = require('./api/dwc_geologicalcontext/eon');
const era = require('./api/dwc_geologicalcontext/era');
const period = require('./api/dwc_geologicalcontext/period');
const epoch = require('./api/dwc_geologicalcontext/epoch');
const geologicalcontext = require('./api/dwc_geologicalcontext/geologicalcontext');

//multimedia
const typemedia = require('./api/mul_multimedia/typemedia');
const multimedia = require('./api/mul_multimedia/multimedia');

//conserva
const proceso = require('./api/cons_conserva/proceso');
const conserva = require('./api/cons_conserva/conserva');

//institution
const institution = require('./api/usu_institution/institution');
const area = require('./api/usu_institution/area');
const entidad = require('./api/usu_institution/entidad');


// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieParser('keyboard_cat'));
app.use(fileUpload());
app.use(cors({
  origin:'http://localhost:4200/',
  credentials:true
}));
//temporales
//app.use('/api/stickers', stickers);
//app.use('/api/persons', persons);

//users
app.use('/api/rols', rols);
app.use('/api/users', users);
app.use('/auth', auth);

//identification
app.use('/api/verifications', verifications);
app.use('/api/identifications', identifications);

//location
app.use('/api/continent', continent);
app.use('/api/waterbody', waterbody);
app.use('/api/island', island);
app.use('/api/geodeticdatum', geodeticdatum);
app.use('/api/georeferenceverificationstatus', georeferenceverificationstatus);
app.use('/api/location', location);
app.use('/api/country', country);
app.use('/api/stateprovince', stateprovince);
app.use('/api/county', county);
app.use('/api/municipality', municipality);

//taxon
app.use('/api/taxonrank', taxonrank);
app.use('/api/taxonomicstatus', taxonomicstatus);
app.use('/api/taxon', taxon);
app.use('/api/kingdom', kingdom);
app.use('/api/phylum', phylum);
app.use('/api/class', clase);
app.use('/api/order', order);
app.use('/api/family', family);
app.use('/api/genus', genus);
app.use('/api/specie', specie);

//occurrence
app.use('/api/organismquantitytype', organismquantitytype);
app.use('/api/lifestage', lifestage);
app.use('/api/reproductivecondition', reproductivecondition);
app.use('/api/sex', sex);
app.use('/api/establishmentmeans', establishementmeans);
app.use('/api/occurrence', occurrence);

//organism
app.use('/api/organism', organism);
//event
app.use('/api/event', event);
//divpolitica
app.use('/api/divpolitica', divpolitica);
//recordlevel
app.use('/api/recordlevel', recordlevel);
app.use('/api/basisofrecord', basisofrecord);

//geologicalcontext
app.use('/api/eon', eon);
app.use('/api/era', era);
app.use('/api/period', period);
app.use('/api/epoch', epoch);
app.use('/api/geologicalcontext', geologicalcontext);

//multimedia
app.use('/api/typemedia', typemedia);
app.use('/api/multimedia', multimedia);

//conserva
app.use('/api/proceso', proceso);
app.use('/api/conserva', conserva);

//institution
app.use('/api/institution', institution);
app.use('/api/area', area);
app.use('/api/entidad', entidad);

//SESSIONS
app.use(session({
  secret: 'ESTO ES SECRETO',
  resave: true,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1 : 1;
  res.send('Acceso Denegado');
});

//app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status ||res.statusCode|| 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
    //error: err.status
  })
});

module.exports = app;