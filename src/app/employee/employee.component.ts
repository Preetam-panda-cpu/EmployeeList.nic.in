import { Component} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  public EmpData: any[] = [
    {
      emp_id: 1,
      emp_name: 'Pinku',
      emp_doj: new Date('2005-06-06'),
      emp_salary: 200000,
      emp_location: 'Bangalore',
      emp_education: 'B.tech',
      emp_gender: 'Male',
      emp_designation: 'Fullstack Developer',
      emp_dob: new Date('2019-06-06'),
      emp_company: 'Indege Pvt',
      emp_year_exp: '2years',
    },
    {
      emp_id: 2,
      emp_name: 'Jay',
      emp_doj: new Date('2007-06-05') ,
      emp_salary: 230000,
      emp_location: 'Bangalore',
      emp_education: 'B.tech',
      emp_gender: 'Male',
      emp_designation: 'Sql  Developer',
      emp_dob: new Date('2019-07-05'),
      emp_company: ' Google',
      emp_year_exp: '4years',
    },
    {
      emp_id: 3,
      emp_name: 'Shashi',
      emp_doj: new Date('2000-06-05') ,
      emp_salary: 650000,
      emp_location: 'Bangalore',
      emp_education: 'B.tech',
      emp_gender: 'Male',
      emp_designation: 'Fullstack  Developer',
      emp_dob: new Date('2000-07-05'),
      emp_company: ' Testyantra',
      emp_year_exp: '6years',
    },
    {
      emp_id: 4,
      emp_name: 'Dibya',
      emp_doj: new Date('2005-06-20'),
      emp_salary: 600000,
      emp_location: 'Bangalore',
      emp_education: 'B.tech',
      emp_gender: 'Male',
      emp_designation: 'Java  Developer',
      emp_dob: new Date('2019-08-05'),
      emp_company: ' capgemini',
      emp_year_exp: '4years',
    },
    {
      emp_id: 5,
      emp_name: 'Nalini',
      emp_doj: new Date('2005-06-25'),
      emp_salary: 250000,
      emp_location: 'Odisha',
      emp_education: 'B.tech',
      emp_gender: 'Male',
      emp_designation: 'Nodejs  Developer',
      emp_dob: new Date('2019-05-05'),
      emp_company: ' Amazon',
      emp_year_exp: '1years',
    },
  ];
// tslint:disable-next-line: eofline
  // ngFor  Dom change Detection
  // addEmployee
  addEmployee() {
    this.EmpData.push({
      emp_id: 6,
      emp_name: 'sumit',
      emp_doj: new Date('2005-06-25'),
      emp_salary: 280000,
      emp_location: 'Odisha',
      emp_education: 'B.tech',
      emp_gender: 'Male',
      emp_designation: 'Nodejs  Developer',
      emp_dob: new Date('2019-05-05'),
      emp_company: ' Lenovo',
      emp_year_exp: '1.5years',

    });
}
// tslint:disable-next-line: eofline
// DeleteEmployee
deleteEmp(emp) {
  const index = this.EmpData.indexOf(emp);
  this .EmpData.splice(index, 1); // take position and delete
}
}
