let idUser = 1;
let name = document.querySelector(".name"),
  username = document.querySelector(".username"),
  mail = document.querySelector(".mail"),
  phone = document.querySelector(".phone"),
  website = document.querySelector(".website");
async function getUsers() {
  try {
    if (idUser < 1) return alert("Estas en el principio de la lista de usuarios");
    if (idUser >= 10) return alert("Estas en el final de la lista de usuarios");
    let fetchUsers = await fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`);
    if (!fetchUsers.ok) throw "Error al buscar usuario";
    let jsonUser = await fetchUsers.json();
    let template = ``;
    (template += name.value = jsonUser.name), (username.value = jsonUser.username), (mail.value = jsonUser.email), (phone.value = jsonUser.phone), (website.value = jsonUser.website);
  } catch (err) {
    console.log(err);
  }
}
document.querySelector("#next").addEventListener("click", () => {
  idUser++;
  getUsers();
});
document.querySelector("#previous").addEventListener("click", () => {
  idUser--;
  getUsers();
});
getUsers();
