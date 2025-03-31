const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// funzione che mi crea la card

const createMemberCard = (member) => {

  //member destrutturato per tutti gli elementi di teamMembers
  const { name, role, email, img} = member

  //card effettiva
  const card =`<div class="col-12">
                <div class="card-image">
                    <img src="./img/${img}" alt="" >
                </div>
                <div class="card-text">
                    <h4>${name}</h4>
                    <p>${role}</p>
                    <a href="">${email}</a>
                </div>
            </div>`

            return card
}