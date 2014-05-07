Requirements: nodeJS and MongoDB

Importing data:
copy MPCORB.DAT into the node project folder form here: http://www.minorplanetcenter.org/iau/MPCORB/MPCORB.DAT

import by running:
> node planetsimport.js

Note: Watch CPU usage of the node process, it doesn't exit it on its own :)  control-c when the CPU usage drops to zero.. its done!

Run using: 

> node index.js

then visit: 
http://localhost:3000/
(warning that UI is half backed)


Getsome data:

http://localhost:3000/planets/list/10/12       (skips the first 10, shows 12 in order)

http://localhost:3000/planets/00017  (get a specific astroid by designation)


