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
    displayEmployees();
    employeeMonthlySalary();
  });
})

function displayEmployees(){
  var employeeOutput = $('#employeeList');
  employeeOutput.empty();
  for (var i=0; i<employeeArray.length; i++){
    var stringToAppend = '<li>'
    stringToAppend += employeeArray[i].firstName + ' ';
    stringToAppend += employeeArray[i].lastName + ' ';
    stringToAppend += employeeArray[i].idNumber + ' ';
    stringToAppend += employeeArray[i].jobTitle + ' ';
    stringToAppend += employeeArray[i].annualSalary + ' ';
    stringToAppend += '</li>';
    employeeOutput.append(stringToAppend);
  }
};

function employeeMonthlySalary(){
  /// create variable
  var totalMonthlySalary = 0;
  $('#totalPayment').empty();
  ///run a for loop that divides annual wage by 12 and pushes to the variable
  ///while also adding to it
  for (var i=0; i<employeeArray.length; i++){
  totalMonthlySalary = employeeArray[i].annualSalary * .083 + totalMonthlySalary;
  };
  /// append totalMonthlySalary to the DOM
  $('#totalPayment').append(totalMonthlySalary);
}
