require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const dbconfig = {
  host: process.env.HOST,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "postgres",
    logging: false,
    port: 5432,
  }
);

try {
  sequelize.authenticate();
  console.log("The connection has been established successfully...");
} catch (error) {
  console.error("Error setting up the connection =>", error);
}

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Category = require("./categoryModel")(sequelize, DataTypes);
db.Author = require("./authorModel")(sequelize, DataTypes);
db.bookAuthor = require("./bookAuthorModel")(sequelize, DataTypes);
db.Publisher = require("./publisherModel")(sequelize, DataTypes);
db.Location = require("./locationModel")(sequelize, DataTypes);
db.libraryStaff = require("./libraryStaffModel")(sequelize, DataTypes);
db.memberStatus = require("./memberStatusModel")(sequelize, DataTypes);
db.bookRequestStatus = require("./bookRequestStatusModel")(
  sequelize,
  DataTypes
);
db.Book = require("./bookModel")(sequelize, DataTypes);
db.Member = require("./memberModel")(sequelize, DataTypes);
db.bookRequest = require("./bookRequestmodel")(sequelize, DataTypes);
db.finePayment = require("./finePaymentModel")(sequelize, DataTypes);
db.fineDue = require("./fineDueModel")(sequelize, DataTypes);
db.bookIssue = require("./bookIssueModel")(sequelize, DataTypes);

// db.sequelize
//   .sync({ alter: true })
//   .then((req, res) => {
//     console.log("Database and Tables synced successfully...");
//   })
//   .catch((error) => {
//     console.error("Error syncing the database :", error);
//   });

//Associations
db.bookAuthor.belongsTo(db.Book, { foreignKey: "bookID" });
db.bookAuthor.belongsTo(db.Author, { foreignKey: "authorID" });

db.Book.belongsTo(db.Category, { foreignKey: "categoryID" });
db.Book.belongsTo(db.Publisher, { foreignKey: "publisherID" });
db.Book.belongsTo(db.Location, { foreignKey: "locationID" });

db.Member.belongsTo(db.memberStatus, { foreignKey: "activeStatusID" });

db.finePayment.belongsTo(db.Member, { foreignKey: "memberID" });

db.fineDue.belongsTo(db.Member, { foreignKey: "memberID" });
db.fineDue.belongsTo(db.bookIssue, { foreignKey: "issueID" });

db.bookIssue.belongsTo(db.Book, { foreignKey: "bookID" });
db.bookIssue.belongsTo(db.Member, { foreignKey: "memberID" });
db.bookIssue.belongsTo(db.libraryStaff, { foreignKey: "issuedByID" });

db.bookRequest.belongsTo(db.Book, { foreignKey: "bookID" });
db.bookRequest.belongsTo(db.Member, { foreignKey: "memberID" });
db.bookRequest.belongsTo(db.bookRequestStatus, {
  foreignKey: "availableStatusID",
});

module.exports = db;
