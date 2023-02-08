/* console.log("yavuz");
let isim = "Yavuz";
let yas = 23;
mesaj = `adım ${isim} yaşım ${yas} `;

console.log(mesaj);

let ogrenciler = ["yavuz", "ali", "veli"];
let ogretmenler = ["ahmet", "mehmet", "ayşe"];

//sonuc =ogrenciler.push("ahmet");
sonuc = ogrenciler.concat(ogretmenler);
console.log(sonuc);

 */


let gorevler = [{ id: 1, text: "gorev1", gorevAdi: "Görev1" }, { id: 1, text: "gorev1", gorevAdi: "Görev2" }, { id: 1, text: "gorev1", gorevAdi: "Görev3" },];

displayTask();

function displayTask() {
  let ul = document.getElementById("task-list");
  ul.innerHTML = "";

  for (let gorev of gorevler) {
    let li = `<li class="task list-group-item">
    <div class="form-check"><input type="checkbox" id=${gorev.id} class="form-check-input"><label
            for=${gorev.id} class="form-check-label">${gorev.gorevAdi}</label></div>
    </li>`;

    ul.insertAdjacentHTML("beforeend", li);

  }
}



//TEMİZLE
document.querySelector("#btnClear").addEventListener("click", clearTask);

function clearTask(event) {


  event.preventDefault();
}


//EKLE
document.querySelector("#btnAddNewTask").addEventListener("click", newTask);

function newTask(event) {
  let taskInput = document.querySelector("#txtTaskName");

  if (taskInput.value == "") {
    alert("Görev adı boş olamaz");
  } else {
    
    gorevler.push({ id: gorevler.length+1, "gorevAdi": taskInput.value });
    taskInput.value = ""; 
    displayTask();
  }
 
  event.preventDefault();
}

