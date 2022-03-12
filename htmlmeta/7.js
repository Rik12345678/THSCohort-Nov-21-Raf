window.addEventListener("DOMContentLoaded",() =>{
    console.log(document.getElementById("form"));    
});

        function getFormData() {
            let value = document.getElementById("formdata").value;
            if (value==""){return alert("Enter the data");        }
            document.getElementById("short").innerText = value.toUpperCase();
            document.getElementById("clear").hidden = false;
        }
    
        function clearData() {
            document.getElementById("short").innerText = "";
            document.getElementById("clear").hidden = true;
            document.getElementById("formdata").value = "";
        }