var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node SAS DDC' });
});

router.get('/jsonDataViewer.html', function(req, res, next) {
  res.render('jsonDataViewer', { title: 'jsonDataViewer ddc' });
});

router.get('/google_OrgChart.html', function(req, res, next) {
  res.render('google_OrgChart', { title: 'google_OrgChart ddc' });
});

router.get('/google_Calendar.html', function(req, res, next) {
  res.render('google_Calendar', { title: 'google_Calendar ddc' });
});


router.get('/d3_radialStackedBar.html', function(req, res, next) {
  res.render('d3_radialStackedBar', { title: 'd3_radialStackedBar ddc' });
});

router.get('/d3_NetworkDiagram.html', function(req, res, next) {
  res.render('d3_NetworkDiagram', { title: 'd3_NetworkDiagram ddc' });
});

router.get('/d3_FunnelChart.html', function(req, res, next) {
  res.render('d3_FunnelChart', { title: 'd3_FunnelChart ddc' });
});

router.get('/d3_circlePacking.html', function(req, res, next) {
  res.render('d3_circlePacking', { title: 'd3_circlePacking ddc' });
});

router.get('/d3_spiralHeatmap.html', function(req, res, next) {
  res.render('d3_spiralHeatmap', { title: 'd3_spiralHeatmap ddc' });
});

router.get('/multiSelector.html', function(req, res, next) {
  res.render('multiSelector', { title: 'Multiselector ddc' });
});

module.exports = router;
