db-migrate db:drop db_matcha --config ./config/database.json
db-migrate db:create db_matcha --config ./config/database.json
db-migrate up --config ./config/dev.json