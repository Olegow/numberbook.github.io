;(function () {
    let contacs = localStorage.name;
    let doc = window.document;
    let header = doc.getElementById('header');
    if (typeof contacs === undefined)
        header.innerText = JSON.parse(contacs);


    let btn = doc.getElementById('btn');
    let add = doc.getElementById('add');
    // let field = doc.getElementById('field');
    console.dir(header);
    //

    let changeBg = function () {
        header.style.backgroundColor = 'red';
        header.style.width = '300px';
        header.style.height = '1300px';
    };
    //
    //
    btn.addEventListener('click', changeBg);


    add.addEventListener('click', function () {
        // let block = doc.createElement('h1');
        // block.innerHTML = "<span>the title</span>"
        // header.appendChild(block);
        // header.innerHTML = "<h1><span>the title</span></h1>"
        let tmpObj = {
            name: 'Vitalii',
            lastname: 'Stalynskyi'
        };

        localStorage.setItem('name', JSON.stringify(tmpObj));
        // sessionStorage.setItem('name', 'Vitalii');
    });


    // field.addEventListener('focus', changeBg)
    //
})();


