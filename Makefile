install:
	npm ci

make brain-games:
	node bin/brain-games.js

make game-even:
	node bin/brain-even.js

make game-calc:
	node bin/brain-calc.js

make game-gcd:
	node bin/brain-gcd.js

make game-progression:
	node bin/brain-progression.js

make game-prime:
	node bin/brain-prime.js

lint:
	npx eslint .

publish:
	npm publish --dry-run
