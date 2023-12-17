function validate() {
    if (!document.getElementById("name").value.match(/^[A-Za-z\s]+$/)) {
        return false
    }
    if (!document.getElementById("number").value.match(/^\(\d{3}\)\s\d{3}-\d{4}$/)) {
        return false
    }
    return true
}
    
function formatNum() {
    var formattedNum = document.getElementById("number").value.replace(/\D/g, '')
    return formattedNum.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
}

function displayInfo() {
    if (validate()) {
        document.getElementById("Name").innerHTML = document.getElementById("name").value
        document.getElementById("Address").innerHTML = document.getElementById("address").value
        document.getElementById("Num").innerHTML = formatNum()
    }else { alert("Please use the correct name or number format.")}

}

function countChars() { 
  document.getElementById("charCount").innerHTML = document.getElementById("textArea").value.length
}

function countLetters() {
    document.getElementById("letterCount").innerHTML = document.getElementById("textArea").value.replace(/[^a-zA-Z]/g, '').length
}

function addBookmark() {
    
    if (document.getElementById("url").value) {
        var item = document.createElement("li")
        var padlockIcon = document.createElement("i")
        

        if (document.getElementById("url").value.startsWith("https://")) {
            padlockIcon.classList.add("fas", "fa-lock")
            padlockIcon.style.color = "#3fe645"
            item.textContent = document.getElementById("url").value

        }

        else if (document.getElementById("url").value.startsWith("http://")) {
            padlockIcon.classList.add("fas", "fa-lock-open")
            padlockIcon.style.color = "#f44336"
            item.textContent = document.getElementById("url").value

        }

        else {
            document.getElementById("url").value = ""
            alert("Please provide a valid link.")
            return
        }

        document.getElementById("list").appendChild(item).appendChild(padlockIcon)
        document.getElementById("url").value = ""
    }else {
        alert("Please provide a  link.")
    return
}

}