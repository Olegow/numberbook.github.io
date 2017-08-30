;(function() {

  var addNumBut = document.getElementById('add_num_but');
  window.showAddNum = function () {
    var add_num = document.getElementById('add_num');
    add_num.style.display = 'flex';
    setTimeout(function() {
      add_num.style.opacity='1'
    },5);
  }

  var numbers = [];

  window.getPersonInfo = function () {
      var firstname = document.getElementById('firstname');
      var lastname = document.getElementById('lastname');
      var number = document.getElementById('number');
      var email = document.getElementById('email');
      var firstnameVal = firstname.value;
      var lastnameVal = lastname.value;
      var numberVal = number.value;
      var emailVal = email.value;
      var numberList = document.getElementById('numberList');
      if (firstnameVal != "" && lastnameVal != "" && numberVal != "" && emailVal != "") {



          var person = {
                  firstname: firstnameVal,
                  lastname: lastnameVal,
                  number: [numberVal],
                  email: emailVal
              };
          numbers.push(person);

          for (var i = 0; i < numbers.length; i++) {

              localStorage.setItem('person' + [i], JSON.stringify(numbers[i]));
              var entry = document.createElement('li');
              entry.appendChild(document.createTextNode(localStorage.getItem(JSON.parse(person))));
              var editButton = document.createElement('button');
              editButton.appendChild(document.createTextNode("Изменить"));
              editButton.setAttribute('onClick','editName('+i+')');
              entry.appendChild(editButton);
              numberList.appendChild(entry);
          }


        var add_num = document.getElementById('add_num');
          add_num.style.display = 'none';
        setTimeout(function() {
          add_num.style.opacity='0'
        },5);
      }


  }

})();
