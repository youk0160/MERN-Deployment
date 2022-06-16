const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

require("./server/config/mongoose.config");

require("./server/routes/serviceReq.routes")(app);

app.listen(port, () => console.log(`Listening: ${port}`));