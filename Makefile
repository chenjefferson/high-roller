usertest:
	curl -X POST \
	    -H  "Content-Type: application/json" \
	    -d '{"name": "Jeff", "email": "me@chenjefferson.com", "password": "beandog" }' \
	    localhost:5000/api/users
