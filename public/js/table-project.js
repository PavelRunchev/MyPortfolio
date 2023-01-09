(function() {
    "use strict";
    
    const tableData = [
        "Introduction to Programming with C++:6",
        "OOP with C#:6",
        "Computer Graphics:6",
        "CPU Architectures:6",
        "Data base:none",
        "Programming in Net Envirment:none",
        "Operation Systems:none",
        "Discrete Structures:none"
    ];

    let table = document.querySelector('.table');
    table.style.cursor = "pointer";

    if(table == null)
        ErrorDOMElement;

    function createEl(el) {
        return document.createElement(`${el}`);
    }

    let thead = createEl('thead');
    thead.style.backgroundColor = 'rgba(73,159,195, 0.65)';
    thead.innerHTML = '<tr>' + 
        '<th scope="col">Discipline</th>' +
        '<th scope="col">Grade</th>' +
        '</tr>';
    table.appendChild(thead);

    let tbody = createEl('tbody');
    table.appendChild(tbody);

    //tableData extract from codeData.js!
    for (const row of tableData) {
        const [discipline, grade] = row.split(':');
        let tr = createEl('tr');
        tr.classList.add('tr-default');
        tr.innerHTML = `<td>${discipline}</td><td>${grade}</td>`;
        tbody.appendChild(tr);
    }
    
})(window);