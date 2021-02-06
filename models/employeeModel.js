const fs        = require("fs");
const path      = require("path");
const filePath  = path.join(path.dirname(require.main.filename), 'data', 'employeeOfMonth.json');

const getEmployeeInfoFromFile = (cb) => {
	fs.readFile(filePath, (error, fileContent) => {
		if (error) {
			return cb([]);
		}

		cb(JSON.parse(fileContent));
	});
}

module.exports = class Employee {
	constructor(name, achievement, imgUrl) {
		this.name           = name;
		this.achievement    = achievement;
		this.imgUrl         = imgUrl;
	}

	save() {
		getEmployeeInfoFromFile(employee => {
			employee[0] = this;
			fs.writeFile(filePath, JSON.stringify(employee), (error) => {
				console.log(error);
			})
		});
	}

	static fetchEmployee(cb) {
		getEmployeeInfoFromFile(cb);
	}
}