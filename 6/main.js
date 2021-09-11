var employee = {
	name: "Elon Musk",
	birthYear: 1971,
	email: "dogefather@tesla.com",
	department: "Executive Operations",
	salary: 4000000,
	age: function () {
		var dt = new Date();
		var year = dt.getFullYear();
		return year - this.birthYear;
	},
};

document.getElementById("name").innerHTML = employee.name;
document.getElementById("birthYear").innerHTML = employee.birthYear;
age.innerHTML = employee.age();
email.innerHTML = employee.email;
department.innerHTML = employee.department;
