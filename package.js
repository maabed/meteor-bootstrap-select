Package.describe({
  summary: "bootstrap-select for meteor apps",
  name: 'maabed:bootstrap-select',
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.1');
  api.addFiles('bootstrap-select.min.css', 'client');
  api.addFiles('bootstrap-select.min.js', 'client');

});