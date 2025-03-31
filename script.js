const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "female3.png"
  }
];

// funzione che mi crea la card

const createMemberCard = (member) => {

  //member destrutturato per tutti gli elementi di teamMembers
  const { name, role, email, img } = member

  //card effettiva
  const card =
    `<div class="col-12 col-md-6 col-lg-4">
              <div class="team-card">
                <div class="card-image">
                    <img src="./img/${img}" alt="" class=" img-fluid" >
                </div>
                <div class="card-text">
                    <h4 class="bg-turquoise">${name}</h4>
                    <p class="b-role">${role}</p>
                    <a href="">${email}</a>
                </div>
              </div>
          </div>`

  return card
}

//recupero elementi dom
const nameField = document.getElementById("name");
const roleField = document.getElementById("role");
const emailField = document.getElementById("email");
const imgField = document.getElementById("img");
const button = document.getElementById("send");
const membersForm = document.getElementById("team-members");


//arrow function per il contenuto array
const renderTeam = (array) => {

  //creo una variabile vuota per mettere insieme tutte le colonne sotto forma di stringa
  let cards = "";
  //creo un ciclo for per prendere il parametro cards
  for (let i = 0; i < array.length; i++) {
    //concateno il valore di cards con quello di createMembersCard
    cards += createMemberCard(array[i])
  }
  //mi recupero dal dom id team-members per assegnargli il contenuto di cards
  document.getElementById("team-members").innerHTML = cards;
}

//chiamata funzione
renderTeam(teamMembers);

//prevengo il refresh della pagina sul bottone
button.addEventListener("click" ,(e) =>{
  e.preventDefault();

//vado a controllare i campi del form
  const name = nameField.value;
  const role = roleField.value;
  const email =emailField.value;
  const img = imgField.value;

//controllo se c'é qualcosa di diverso inserito
  if(!name || !role || !email || !img){
    alert("Controlla che i campi siano compilati corretamente")
    return;
  }
//creo il nuovo membro da inserire nell'array
  const newMember = {
    name,
    role,
    email,
    img
  };
  teamMembers.push(newMember);

  renderTeam(teamMembers);

  document.getElementById("member-form").reset();
});