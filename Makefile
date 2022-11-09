install:
	npm ci

make brain-games:
	node bin/brain-games.js

make game-even:
	node bin/brain-even.js

make game-calc:
	node bin/brain-calc.js

lint:
	npx eslint .

publish:
	npm publish --dry-run
