

var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Burgers = sequelize.define("burger", {
	id:{
			type:Sequelize.INTEGER,
			autoIncrement:true,
			primaryKey:true
	},
	burger_name:{
		type: Sequelize.STRING,
	},
	devoured:{Sequelize.BOOLEAN,
	},
	timestamps:true
});





module.exports = burgerOp;
