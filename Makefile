# REPORTER = spec
REPORTER = mochawesome

ESLINT := node_modules/.bin/eslint


ifdef TEST_FILE
else
    TEST_FILE = test/**/*.coffee
endif

build:
	rsync -avz --exclude="*.coffee" --exclude="*.js.map" ./src/ ./lib/

clean:
	rm -rf lib/

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
	  --compilers coffee:coffee-script/register \
		--harmony \
		--reporter $(REPORTER) \
		--require should \
		$(TEST_FILE)

doc:
	./node_modules/.bin/jsdoc \
	-d docs \
	src/**/*.js

.PHONY: test doc
