// 1)  creo array utenti:
const memberList = [
     /* 0 */{
        fullName: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "img/wayne-barnett-founder-ceo.jpg",
    },  /* 1 */ {
        fullName: "Angela Caroll",
        role: "Chief Editor",
        photo: "img/angela-caroll-chief-editor.jpg",
    },  /* 2 */ { 
        fullName: "Walter Gordon",
        role:"Office Manager",
        photo: "img/walter-gordon-office-manager.jpg",
    },  /* 3 */ {
        fullName: "Angela Lopez",
        role:"Social Media Manager",
        photo: "img/angela-lopez-social-media-manager.jpg",
    },  /* 4 */ {
        fullName: "Scott Estrada",
        role:"Developer",
        photo: "img/scott-estrada-developer.jpg",
    },  /* 5 */ {
        fullName: "Barbara Ramos",
        role:"Graphic Designer",
        photo: "img/barbara-ramos-graphic-designer.jpg",
    }
]

const memberContainerEl = document.querySelector(".member-container");
console.log(memberContainerEl);


// 2)stampare informazioni nella console: creo ciclo:
for (let i = 0; i < memberList.length; i++) {
    // salvo i miei objects in una variabile:
    const member = memberList[i];

    console.log(member.fullName, member.role, member.photo);

    // 3) stampo nell'html sotto forma di stringa:
    // creo container
    const cardEl = document.createElement( "div" );

    // attribuisco classi:
    cardEl.classList.add(".card");
    cardEl.innerHTML = `${member.fullName} <br> ${member.role}<br> <img src=${member.photo}> `;
    
    //appendo card al container:
    memberContainerEl.append(cardEl);

}
	        
	        
		        
		
	            
		    