var fs = require('fs'),
    path = require('path');

afterEach(function() {
    var currentSpec = jasmine.getEnv().currentSpec,
        passed = currentSpec.results().passed(),
        specName = (currentSpec.suite.description + ' ' + currentSpec.description).replace(/ /g, '-'),
        baseFileName = specName,
        screenshotsDir = __dirname + '/screenshots';

    if (!passed) {
        if (!fs.existsSync(screenshotsDir)) {
            fs.mkdirSync(screenshotsDir);
        }

        var file = path.resolve(screenshotsDir + '/' + baseFileName + '.png');
        browser.takeScreenshot().then(function(png) {
            console.log('Writing file ' + file);
            fs.writeFileSync(file, png, { encoding: 'base64' });
        });
    }
});
