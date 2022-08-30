let idUser = 1;
const $contInfo = document.getElementById('contInfo'),
  $name = document.getElementById("name"),
  $mail = document.getElementById("mail"),
  $phone = document.getElementById("phone"),
  $website = document.getElementById("website");
async function getUsers() {
  try {
    if (idUser >= 10) idUser = 1
    if (idUser < 1) idUser = 10
    let fetchUsers = await fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`);
    if (!fetchUsers.ok) throw "Error al buscar usuario";
    let jsonUser = await fetchUsers.json();
    $name.innerText = jsonUser.name;
    $mail.innerText = jsonUser.email;
    $phone.innerText = jsonUser.phone;
    $website.innerText = jsonUser.website;
  } catch (err) {
    console.log(err);
  }
}
document.getElementById("next").addEventListener("click", () => {
  idUser++;
  $contInfo.classList.remove('cont-info-prev')
  $contInfo.classList.add('cont-info-next')
  getUsers();
  setTimeout(() => {
    $contInfo.classList.remove('cont-info-next')
  }, 400);
});
document.getElementById("previous").addEventListener("click", () => {
  idUser--;
  $contInfo.classList.remove('cont-info-next')
  $contInfo.classList.add('cont-info-prev')
  getUsers();
  setTimeout(() => {
    $contInfo.classList.remove('cont-info-prev')
  }, 400);
});
getUsers();
