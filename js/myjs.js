function checkempty() {
    var isEmpty=false,
        fname=document.getElementById("fname").value,
        fname=document.getElementById("lname").value,
        fname=document.getElementById("age").value;

    if (fname===""){
        alert("First Name empty");
        isEmpty=true;
    } else if (lname===""){
        alert("Last Name empty");
        isEmpty=true;
    }if (age===""){
        alert("Age is empty");
        isEmpty=true;
    }
    return isEmpty;

}

//Add Row

var rindex,
    table=document.getElementById("table");


function addTableRow() {

        var newRow=table.insertRow(table.length),
            cell1=newRow.insertCell(0),
            cell2=newRow.insertCell(1),
            cell3=newRow.insertCell(2),
            cell4=newRow.insertCell(3),
            cell5=newRow.insertCell(4),
            cell6=newRow.insertCell(5),

            fname=document.getElementById("fname").value,
            lname=document.getElementById("lname").value,
            add=document.getElementById("add").value;

            pcode=document.getElementById("pcode").value,
            state=document.getElementById("state").value,
            country=document.getElementById("country").value;

        cell1.innerHTML=fname;
        cell2.innerHTML=lname;
        cell3.innerHTML=add;
        cell4.innerHTML=pcode;
        cell5.innerHTML=state;
        cell6.innerHTML=country;
        selectRow();

}

//select row to input

function selectRow() {
    for (var i=1; i<table.rows.length; i++){
        table.rows[i].onclick=function () {
            rindex=this.rowIndex;
            // console.log(rindex);
            document.getElementById("fname").value=this.cells[0].innerHTML;
            document.getElementById("lname").value=this.cells[1].innerHTML;
            document.getElementById("add").value=this.cells[2].innerHTML;
            document.getElementById("pcode").value=this.cells[3].innerHTML;
            document.getElementById("state").value=this.cells[4].innerHTML;
            document.getElementById("country").value=this.cells[5].innerHTML;

        }
    }
}
selectRow();

function update() {

        var fname=document.getElementById("fname").value,
            lname=document.getElementById("lname").value,
            add=document.getElementById("add").value;
            pcode=document.getElementById("pcode").value,
            state=document.getElementById("state").value,
            country=document.getElementById("country").value;

        table.rows[rindex].cells[0].innerHTML=fname;
        table.rows[rindex].cells[1].innerHTML=lname;
        table.rows[rindex].cells[2].innerHTML=add;
        table.rows[rindex].cells[3].innerHTML=pcode;
        table.rows[rindex].cells[4].innerHTML=state;
        table.rows[rindex].cells[5].innerHTML=country;

}

function deleterow() {
    table.deleteRow(rindex);
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("add").value="";
    document.getElementById("pcode").value="";
    document.getElementById("state").value="";
    document.getElementById("country").value="";
}