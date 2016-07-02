docker kill $(docker ps -a -q  --filter ancestor=parity/poa --filter status=running)
