const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const app = express();
app.use(cors());
// синтаксический анализ запросов content-type - application/json
app.use(express.json());
// синтаксический анализ запросов content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "session",
    secret: "COOKIE_SECRET", // следует использовать в качестве секретной переменной окружения
    httpOnly: true
  })
);

const db = require("./app/models/index");
const Role = db.role;
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

require('./app/routes/auth.route')(app);
require('./app/routes/user.route')(app);


app.get("/", (req, res) => {
  res.json({ message: "Welcome to  application." });
});

const PORT = process.env.PORT || 9802;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
  }
