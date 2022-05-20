// var input, addbutton, sub;
// input = document.getElementById("text"); //input
// addbutton = document.getElementById("add"); //button
// sub = document.getElementById("sub"); //append div

// addbutton.addEventListener("click", function () {
//   const content = document.createElement("div");
//   const para = document.createElement("div");
//   content.appendChild(para);

//   para.classList.add("inputclass");
//   para.innerText = input.value;

//   const rbutton = document.createElement("button");
//   rbutton.innerText = "delete";
//   rbutton.classList.add("active");

//   const ebutton = document.createElement("button");
//   ebutton.innerText = "edit";
//   ebutton.classList.add("edit");

//   sub.appendChild(para);
//   para.appendChild(rbutton);

//   input.value = "";
//   para.addEventListener("dblclick", function () {
//     para.style.textDecoration = "line-through";
//   });

//   ebutton.addEventListener("click", function () {});
//   rbutton.addEventListener("click", function () {
//     sub.removeChild(para);
//     rbutton.classList.remove("active");
//   });

//   // const removebutton = document.createElement("button");
//   // removebutton.classList.add("deletebutton");
//   // removebutton.innerText = "Delete";
//   // removebutton.addEventListener("click", function () {
//   //   sub.appendChild(removebutton);
//   //   sub.removeChild(para);
//   // });
// });

var form, input, task, sub;

input = document.getElementById("text");
sub = document.getElementById("sub");
form = document.getElementById("main");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  task = input.value;

  if (task !== "") {
    let container = document.createElement("div");
    container.classList.add("task");

    let subcontainer = document.createElement("div");
    subcontainer.classList.add("values");
    container.appendChild(subcontainer);

    let inputtag = document.createElement("input");
    inputtag.classList.add("text");
    inputtag.type = "text";
    inputtag.value = task;
    inputtag.setAttribute("readonly", "readonly");

    subcontainer.appendChild(inputtag);

    let childdiv = document.createElement("div");
    childdiv.classList.add("action");

    let delbutton = document.createElement("button");
    delbutton.classList.add("delete");
    delbutton.innerText = "Delete";

    let edtbutton = document.createElement("button");
    edtbutton.classList.add("edit");
    edtbutton.innerText = "Edit";

    childdiv.appendChild(delbutton);
    childdiv.appendChild(edtbutton);

    container.appendChild(childdiv);
    sub.appendChild(container);
    input.value = "";

    delbutton.addEventListener("click", function () {
      sub.removeChild(container);
    });

    edtbutton.addEventListener("click", function () {
      if (edtbutton.innerText.toLowerCase() === "edit") {
        inputtag.removeAttribute("readonly");
        edtbutton.innerText = "save";
        inputtag.focus();
      } else {
        edtbutton.innerText = "Edit";
        inputtag.setAttribute("readonly", "readonly");
      }
    });
  } else if (task === "") {
    return false;
  }
});
