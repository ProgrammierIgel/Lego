test:
	npx roboter test

start:
	npx ts-node ./lib/app/app.ts

start-js:
	npx ts-node ./lib/app.js

analyze:
	npx roboter analyze

roboter:
	npx roboter

.PHONY: test \
	start \
	start-js \
	analyze \
	roboter
