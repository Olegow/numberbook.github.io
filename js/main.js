  var addNumBut = document.getElementById('add_num_but');
  var firstname = document.getElementById('firstname');
  var lastname = document.getElementById('lastname');
  var number = document.getElementById('number');
  var email = document.getElementById('email');
  var mask = "per_";
  var locLen = localStorage.length;
  var i;
  var numbers = [];
  function showNumberList () {
      if (locLen > 0) {
          for (i = 0; i < locLen; i++) {
              var key = localStorage.key(i);
              var entry = document.createElement('li');
              var entryDiv = document.createElement('div');
              var entryP = document.createElement('p');
              entryP.innerText = JSON.parse(localStorage.getItem(key)).firstname + ' ' + JSON.parse(localStorage.getItem(key)).lastname;
              var editButton = document.createElement('button');
              editButton.appendChild(document.createTextNode("Изменить"));
              editButton.setAttribute('onClick', 'showEditName(' + i + ')');
              entry.setAttribute('class', 'num_info');
              entryDiv.setAttribute('class', 'num_info_cent');
              entry.appendChild(entryDiv);
              entryDiv.appendChild(entryP);
              entryDiv.appendChild(editButton);
              numberList.appendChild(entry);
          }

      }
  }
  showNumberList();

  console.log(i)
  function showAddNum () {
      var add_num = document.getElementById('add_num');
      add_num.style.display = 'flex';
      setTimeout(function() {add_num.style.opacity='1'},5);
  }

  function getPersonInfo () {
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

          for ( i = 0; i < numbers.length; i++) {

              if (i === 0) {
                i = locLen;
              }

              localStorage.setItem(mask + [i], JSON.stringify(numbers[i]));

              var entry = document.createElement('li');
              var entryDiv = document.createElement('div');
              var entryP = document.createElement('p');
              entryP.innerText = JSON.parse(localStorage.getItem(mask + [i])).firstname + ' ' + JSON.parse(localStorage.getItem(mask + [i])).lastname;
          }
          var editButton = document.createElement('button');
          editButton.appendChild(document.createTextNode("Изменить"));
          editButton.setAttribute('onClick','showEditName('+i+')');
          entry.setAttribute('class', 'num_info');
          entryDiv.setAttribute('class', 'num_info_cent');
          entry.appendChild(entryDiv);
          entryDiv.appendChild(entryP);
          entryDiv.appendChild(editButton);
          numberList.appendChild(entry);

          if (localStorage.mask == 'undefined') {
            JSON.stringify(numbers[i])
          }

          var add_num = document.getElementById('add_num');
          add_num.style.display = 'none';
          setTimeout(function() {add_num.style.opacity='0'},5);
      }
  };

  function showEditName () {
      var num_edit = document.getElementById('num_edit');
      num_edit.style.display = 'flex';
      setTimeout(function() {num_edit.style.opacity='1'},5);
  }

  function changeName () {

      var firstnameInfo = document.getElementById('firstnameInfo');
      var lastnameInfo = document.getElementById('lastnameInfo');
      var numberInfo = document.getElementById('numberInfo');
      var emailInfo = document.getElementById('emailInfo');
      lastnameInfo.value = JSON.parse(localStorage.getItem('person' + [i])).lastname;
      firstnameInfo.value = JSON.parse(localStorage.getItem('person' + [])).firstname;
      numberInfo.value = JSON.parse(localStorage.getItem('person' + [i])).number;
      emailInfo.value = JSON.parse(localStorage.getItem('person' + [i])).email;
  }

