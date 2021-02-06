const Employee = require("../models/employeeModel");

exports.getEmployeeOfMonthInfo = (req, res) => {
	Employee.fetchEmployee(employee => {
		res.render("index.ejs", {
			pageTitle: "Employee of The Month",
			employeeOfMonth: employee
		});
	})
}

exports.postUpdateEmployeeOfMonthInfo = (req, res) => {
	const employee = new Employee(
		req.body.name,
		req.body.achievement,
		req.body.imgUrl
	)

	employee.save();
	res.redirect("/");
}