  
  var addNumBut = document.getElementById('add_num_but');
  var firstname = document.getElementById('firstname');
  var lastname = document.getElementById('lastname');
  var number = document.getElementById('number');
  var email = document.getElementById('email');
  var numId = 0;
  var delId = 0;
  var mask = "per_";
  var locLen = localStorage.length;
  var numbers = [];
  var key = localStorage.key(locLen - 1);
  var numId = parseInt(key.substr(4)) + 1;
  var delId = numId;

  function showNumberList () {
      if (locLen > 0) {
          for (var key in localStorage) {
              var numberListLen = document.getElementById('numberList').children.length;
              for ( var k = numberListLen; k < numberListLen; k++){
                return k;
              }
              var numLen = JSON.parse(localStorage.getItem(key)).number.length;
              numbers.push(localStorage.getItem(key))
              var entry = document.createElement('li');
              var entryDiv = document.createElement('div');
              var entryP = document.createElement('p');
              var entryPNum = document.createElement('p');
              entryP.innerText = JSON.parse(localStorage.getItem(key)).firstname + ' ' + JSON.parse(localStorage.getItem(key)).lastname;
              for (var j = 0; j < numLen; j++) {
                  entryPNum.innerText = JSON.parse(localStorage.getItem(key)).number[j];
              }
              var editButton = document.createElement('button');
              var remuveButton = document.createElement('button');
              editButton.appendChild(document.createTextNode("Изменить"));
              remuveButton.appendChild(document.createTextNode("Удалить"));
              editButton.setAttribute('onClick','showEditName('+k+')');
              remuveButton.setAttribute('onClick','removePerson('+k+')');
              entry.setAttribute('class', 'num_info');
              entryDiv.setAttribute('class', 'num_info_cent');
              entry.appendChild(entryDiv);
              entryDiv.appendChild(entryP);
              entryDiv.appendChild(entryPNum);
              entryDiv.appendChild(editButton);
              entryDiv.appendChild(remuveButton);
              numberList.appendChild(entry);
          }
      }
  }
  showNumberList();


  function showAddNum () {
      var add_num = document.getElementById('add_num');
      add_num.style.display = 'flex';
      setTimeout(function() {add_num.style.opacity='1'},5);
  }

  function getPersonInfo () {

      
      var numberListLen = document.getElementById('numberList').children.length;
      for ( var k = numberListLen; k < numberListLen; k++){
        return k;
      }


      



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

          
          localStorage.setItem(mask + numId, JSON.stringify(numbers[numId]));

          var numLen = JSON.parse(localStorage.getItem(mask + numId)).number.length;
          var entry = document.createElement('li');
          var entryDiv = document.createElement('div');
          var entryP = document.createElement('p');
          var entryPNum = document.createElement('p');
          entryP.innerText = JSON.parse(localStorage.getItem(mask + numId)).firstname + ' ' + JSON.parse(localStorage.getItem(mask + numId)).lastname;
          for (var j = 0; j < numLen; j++) {
                  entryPNum.innerText = JSON.parse(localStorage.getItem(mask + numId)).number[j];
              }
          var editButton = document.createElement('button');
          var remuveButton = document.createElement('button');
          editButton.appendChild(document.createTextNode("Изменить"));
          remuveButton.appendChild(document.createTextNode("Удалить"));
          editButton.setAttribute('onClick','showEditName('+k+')');
          remuveButton.setAttribute('onClick','removePerson('+k+')');
          entry.setAttribute('class', 'num_info');
          entryDiv.setAttribute('class', 'num_info_cent');
          entry.appendChild(entryDiv);
          entryDiv.appendChild(entryP);
          entryDiv.appendChild(entryPNum);
          entryDiv.appendChild(editButton);
          entryDiv.appendChild(remuveButton);
          numberList.appendChild(entry);

          numId++;

          var add_num = document.getElementById('add_num');
          add_num.style.display = 'none';
          setTimeout(function() {add_num.style.opacity='0'},5);
          location.reload()
      }
  };

      var firstnameInfo = document.getElementById('firstnameInfo');
      var lastnameInfo = document.getElementById('lastnameInfo');
      var numberInfo = document.getElementById('numberInfo');
      var emailInfo = document.getElementById('emailInfo');

  function showEditName (i) {
      var num_edit = document.getElementById('num_edit');
      num_edit.style.display = 'flex';
      setTimeout(function() {num_edit.style.opacity='1'},5);

      var num_edit = document.getElementById('num_edit');

      var changeButton = document.createElement('input');
      changeButton.setAttribute('type','button');
      changeButton.setAttribute('value','Сохранить');
      changeButton.setAttribute('id','change_num_but');
      changeButton.setAttribute('onClick','changeName('+i+')');
      num_edit.appendChild(changeButton)

      firstnameInfo.value = JSON.parse(localStorage.getItem(mask + [i])).firstname;
      lastnameInfo.value = JSON.parse(localStorage.getItem(mask + [i])).lastname;
      numberInfo.value = JSON.parse(localStorage.getItem(mask + [i])).number;
      emailInfo.value = JSON.parse(localStorage.getItem(mask + [i])).email;
  }

  function changeName (i) {

      var newPersonInfo = {
        firstname: firstnameInfo.value,
        lastname: lastnameInfo.value,
        number: [numberInfo.value],
        email: emailInfo.value
      }

      numbers.push(newPersonInfo);
      localStorage.setItem(mask + [i], JSON.stringify(newPersonInfo));

      var num_edit = document.getElementById('num_edit');
      num_edit.style.display = 'none';
      setTimeout(function() {add_num.style.opacity='0'},5);

      location.reload()

  }

  function removePerson(delId) {
    localStorage.removeItem(mask + [delId]);
    location.reload()
  }

  function searchPerson() {
    var search = document.getElementById('search');
    var searchVal = search.value;

    if (searchVal != "") {
      for (var k = 0; k < locLen; k++) {
    var str = JSON.parse(localStorage.getItem(mask + k)).firstname + ' ' + 
    JSON.parse(localStorage.getItem(mask + k)).lastname + ' ' + 
    JSON.parse(localStorage.getItem(mask + k)).number + ' ' + 
    JSON.parse(localStorage.getItem(mask + k)).email

    var searchRes = str.search(searchVal);

      if (searchRes ===  0 || searchRes > 0) {

        var num_edit = document.getElementById('num_edit');
        num_edit.style.display = 'flex';
        setTimeout(function() {num_edit.style.opacity='1'},5);

        var num_edit = document.getElementById('num_edit');

        var changeButton = document.createElement('input');
        changeButton.setAttribute('type','button');
        changeButton.setAttribute('value','Закрыть');
        changeButton.setAttribute('id','change_num_but');
        changeButton.setAttribute('onClick','hideSearchPer()');
        num_edit.appendChild(changeButton)

        firstnameInfo.value = JSON.parse(localStorage.getItem(mask + [k])).firstname;
        lastnameInfo.value = JSON.parse(localStorage.getItem(mask + [k])).lastname;
        numberInfo.value = JSON.parse(localStorage.getItem(mask + [k])).number;
        emailInfo.value = JSON.parse(localStorage.getItem(mask + [k])).email;

      }
    }
    }

    
  }

  function hideSearchPer () {
    var num_edit = document.getElementById('num_edit');
    num_edit.style.display = 'none';
     setTimeout(function() {add_num.style.opacity='0'},5);
  }