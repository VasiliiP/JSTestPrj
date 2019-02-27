.DEFAULT_GOAL := run

run:
	babel src --out-dir dist
	webpack
	http-server
