BUILD_DIR := lib/
OUTPUT_DIR := dist/

all: test dist/bonds.gs dist/options.gs dist/stocks.gs

.PHONY: test
test: 
	yarn ava

.PHONY: clean
clean:
	rm -rf $(BUILD_DIR) $(OUTPUT_DIR)

dist/%.gs: lib/%.js
	@mkdir -p dist
	cp $< $@

.PRECIOUS: lib/%.js
lib/%.js: src/%.ts
	yarn tsc
