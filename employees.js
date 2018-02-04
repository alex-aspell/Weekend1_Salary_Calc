var employeeArray = [];

$(document).ready(function(){
  $('#inputNewEmployee').on('click', function(){
    console.log('input new employee')

    var newEmployee = {
      firstName: $('#firstNameInput').val(),
      lastName: $('#lastNameInput').val(),
      idNumber: $('#idNumberInput').val(),
      jobTitle: $('#jobTitleInput').val(),
      annualSalary: $('#annualSalaryInput').val(),
    };
    employeeArray.push(newEmployee);
    $('#employeeInputs').children().val('');
  });
})
