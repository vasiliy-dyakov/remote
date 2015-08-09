NPM_ROOT = node_modules
NPM_BIN = $(NPM_ROOT)/.bin
LIBS = static/libs

.PHONY: all
all: $(NPM_ROOT) $(LIBS)

$(NPM_ROOT):
	@npm install

$(LIBS): $(NPM_ROOT)
	@$(NPM_BIN)/bower install

.PHONY: server
server: $(NPM_ROOT)
	@node server/app.js

.PHONY: lint
lint: $(NPM_ROOT)
	@$(NPM_BIN)/jshint-groups
	@$(NPM_BIN)/jscs .

KARMA_START = $(NPM_ROOT)/karma/bin/karma start test/karma.conf.js
.PHONY: unit
unit: $(NPM_ROOT)
	$(KARMA_START)

.PHONY: unit-single
unit-single: $(NPM_ROOT)
	$(KARMA_START) --single-run=true

.PHONY: e2e
WEB_DRIVER = $(NPM_ROOT)/protractor/selenium
SERVER_FOR_E2E = node server/app.js 4000
e2e: $(WEB_DRIVER)
	@$(SERVER_FOR_E2E)&
	$(NPM_BIN)/protractor test/protractor.conf.js
	@kill -9 $$(ps aux | grep '\s$(SERVER_FOR_E2E)' | awk '{print $$2}')

.PHONY: test
test: unit-single e2e

$(WEB_DRIVER): $(NPM_ROOT)
	$(NPM_BIN)/webdriver-manager update

.PHONY: clean
clean:
	@rm -rf node_modules
	@rm -rf static/libs

# .PHONY: dist
# dist: $(NPM_ROOT) $(LIBS)
# 	node $(NPM_ROOT)/requirejs/bin/r.js -o build.js
# 	node $(NPM_ROOT)/requirejs/bin/r.js -o cssIn=static/common.css out=static/dist/common.css
