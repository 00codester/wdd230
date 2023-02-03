const button = document.getElementById("submitB");
const inputBom = document.getElementById("favchap");
const listBom = document.getElementById("list");

button.addEventListener("click", function() {

	if (inputBom.value !== "") {
        const inputVal = inputBom.value;
        inputBom.value = "";
        let li = document.createElement("li");
        let deleteButton = document.createElement("button");
        //let buttonText = document.createTextNode("X");
        deleteButton.innerHTML = "X";
        li.appendChild(document.createTextNode(inputVal));
        li.appendChild(deleteButton);
        listBom.appendChild(li);
        document.getElementById("favchap").focus();
        
        deleteButton.addEventListener("click", function() {
            //idnum = deleteButton.findIndex();
            listBom.removeChild(li);
        });


	}


});

