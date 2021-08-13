


var budginput=document.getElementById("budginput")
var expeinput=document.getElementById("expeinput")

var calculate=document.getElementById("calculate")
var addexpense=document.getElementById("addexpense")

var dollar1=document.getElementById("dollar1")
var dollar2=document.getElementById("dollar2")
var dollar3=document.getElementById("dollar3")

var table=document.querySelector("table")
var template=document.querySelector("template")
var clone=template.content.cloneNode(true)
var tbody=document.querySelector("tbody")

var expensetext=document.getElementById("expensetext")


calculate.addEventListener("click",function(){

    dollar1.innerHTML=budginput.value;
    dollar3.innerHTML=(budginput.value)-(expeinput.value);
    budginput.value=" ";
    expeinput.value=" ";

})

addexpense.addEventListener("click",function(){


    /************************* */
    var text=Number(dollar2.innerHTML)
    var val=Number(expeinput.value)
    
    dollar2.innerText = text + val;
    dollar3.innerText =( dollar3.innerText)-(expeinput.value);
    /************************************ */


    /********************************* */
    var clone=template.content.cloneNode(true)
    var td=clone.querySelectorAll("td")
    td[0].innerText=expensetext.value;
    td[1].innerText=expeinput.value;
    tbody.appendChild(clone)
    /********************************** */


    /************************************** */
    var table=document.querySelector("table")

    table.addEventListener("click", function(e){


        if(e.target.classList.contains("deleteRow")){

            var balace=Number(dollar3.innerText)
            var expense=Number(dollar2.innerText)

            //اني اضيف القيمة لل balance
            dollar3.innerText = balace + e.target.closest("tr").children[1].innerText;

            //اني اضيف القيمة لل expense
            dollar2.innerText = expense - e.target.closest("tr").children[1].innerText;

            //حذف كل ال tr
            e.target.closest("tr").remove();
        }
    })

    /*************************************** */
/*    
    budginput.value=" ";
    expensetext.value=" ";
    expeinput.value=" ";
*/
})


/*
    var table=document.querySelector("table")

    table.addEventListener("click", function(e){


        if(e.target.classList.contains("deleteRow")){

            var balace=Number(dollar3.innerText)
            var expense=Number(dollar2.innerText)

            //اني اضيف القيمة لل balance
            dollar3.innerText = balace + e.target.closest("tr").children[1].innerText;

            //اني اضيف القيمة لل expense
            dollar2.innerText = expense - e.target.closest("tr").children[1].innerText

            //حذف كل ال tr
            e.target.closest("tr").remove();
        }
    })*/

/*
    var table=document.querySelector("table")

    table.addEventListener("click", function(event){


        if(event.target.classList.contains("deleteRow")){

            var balace=Number(dollar3.innerHTML)
            var expense=Number(dollar2.innerHTML)

            var child=Number(event.target.closest("tr").children[1].innerHTML)

            //اني اضيف القيمة لل balance
            dollar3.innerHTML = (balace) + (child);

            //اني اضيف القيمة لل expense
            dollar2.innerHTML = (expense) - (child);

            //حذف كل ال tr
            event.target.closest("tr").remove();
        }
    })
*/


/*
    var table=document.querySelector("table")

    table.addEventListener("click", function(e){

        var balace=Number(dollar3.innerText)
        var expense=Number(dollar2.innerText)

        if(e.target.classList.contains("deleteRow")){

            //اني اضيف القيمة لل balance
            balace = (balace) + (e.target.closest("tr").children[1].innerText);

            //اني اضيف القيمة لل expense
            expense = (expense) - (e.target.closest("tr").children[1].innerText)

            //حذف كل ال tr
            e.target.closest("tr").remove();
        }
    })
    */

    

