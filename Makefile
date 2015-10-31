NPM_ROOT = node_modules
NPM_BIN = $(NPM_ROOT)/.bin

.PHONY: all
all: $(NPM_ROOT)

$(NPM_ROOT):
	@npm install

.PHONY: server
server: $(NPM_ROOT)
	@supervisor -e 'js|jsx' server/index.js

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
