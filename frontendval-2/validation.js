document.getElementById("submit").onclick = function() {

    let newtask = document.getElementById("newtask").value;

    if (newtask.includes(">") || newtask.includes("<")) {
        document.getElementById("newTaskError").style.display = "block";
      }
}