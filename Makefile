NPM_ROOT = node_modules
NPM_BIN = $(NPM_ROOT)/.bin
DIST_CLIENT = dist/Application.js
BROWSERIFY_PARAMS = client/Application.js -t babelify --outfile $(DIST_CLIENT) --debug --verbose

.PHONY: all
all: $(NPM_ROOT)

$(NPM_ROOT):
	@npm install

.PHONY: server
server: $(NPM_ROOT) $(DIST_CLIENT)
	$(NPM_BIN)/supervisor -e 'js|jsx' -i 'dist,client,__tests__' server/index.js

$(DIST_CLIENT): $(NPM_ROOT)
	$(NPM_BIN)/browserify $(BROWSERIFY_PARAMS)

static: $(NPM_ROOT)
	$(NPM_BIN)/watchify $(BROWSERIFY_PARAMS)

.PHONY: lint
lint: $(NPM_ROOT)
	@$(NPM_BIN)/eslint .
	@$(NPM_BIN)/jscs .

.PHONY: test
test:
	@npm test

.PHONY: clean
clean:
	@rm -rf node_modules
