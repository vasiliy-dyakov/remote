NPM_ROOT = node_modules
NPM_BIN = $(NPM_ROOT)/.bin

.PHONY: all
all: $(NPM_ROOT)

$(NPM_ROOT):
	@npm install

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
	@$(NPM_BIN)/protractor test/protractor.conf.js; kill -9 $$(ps aux | grep '\s$(SERVER_FOR_E2E)' | awk '{print $$2}')

.PHONY: test
test: unit-single e2e

$(WEB_DRIVER): $(NPM_ROOT)
	$(NPM_BIN)/webdriver-manager update

.PHONY: clean
clean:
	@rm -rf node_modules
