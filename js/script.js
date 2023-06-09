/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, 
potete prendere uno spunto dallo screenshot allegato.
*/

const ourTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    },
]
/*
const listTeam = document.querySelector('.list-team');
console.log(listTeam);

let member = "";
for (let i = 0; i < ourTeam.length; i++) {
    const curMember = ourTeam[i];
    console.log(curMember.nome, curMember.ruolo, curMember.foto);
    member += `<li class="member">${curMember.nome}, ${curMember.ruolo}, ${curMember.foto}</li>`
}

listTeam.innerHTML = member;
*/

// BONUS 1-2
const myMembers = document.querySelector('.my-row');
let member = "";
for (let i = 0; i < ourTeam.length; i++) {
    const curMember = ourTeam[i];
    member += `
    <div class="my-col">
        <div class="card">
            <img src="img/${curMember.foto}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4>${curMember.nome}</h4>
                <p class="card-text">${curMember.ruolo}</p>
            </div>
        </div>
    </div>
    `;
}
console.log(member);
myMembers.innerHTML = member;