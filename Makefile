BUILD_DIR := lib/
OUTPUT_DIR := dist/

all: dist/bonds.gs dist/options.gs dist/stocks.gs

.PHONY: clean
clean:
	rm -rf $(BUILD_DIR) $(OUTPUT_DIR)

dist/%.gs: lib/%.js
	@mkdir -p dist
	cp $< $@

lib/%.js: src/%.ts
	yarn tsc
