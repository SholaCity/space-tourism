
// mobile navigation
var hamburger = document.querySelector(".hamburger").addEventListener("click",function (e) {
    vigator = e.target
    vigator.classList.toggle("active-nav")
    
    // console.log(vigator);
   
})

// for destination.html
var planetary = document.querySelectorAll(".planets")
const inputs = document.querySelectorAll('input[name="planetGroup"]');

    Array.from(inputs).forEach((input) => {
        input.addEventListener("click", function (e) {
            console.log(planetary); 
            console.log("working");
            if (e.target.tagName == "INPUT") {
                console.log(planetary);
                const targetPlanet = document.querySelector(e.target.dataset.planet);
                console.log(targetPlanet);
                planetary.forEach((planet) => {
                    console.log(planet);

                    if (planet == targetPlanet) {
                        planet.classList.add("active-planet");
                        } else {
                        planet.classList.remove("active-planet");
                        }
                })
                
            }
        })
    });


// for crew.html
var crewMembers = document.querySelectorAll(".crew-members")
const crewInputs = document.querySelectorAll('input[name="crewGroup"]');

    Array.from(crewInputs).forEach((crew) => {
        crew.addEventListener("click", function (e) {
            // console.log(crewInputs); 
            if (e.target.tagName == "INPUT") {
                // console.log(crewMembers);
                const targetCrewMember = document.querySelector(e.target.dataset.crew);
                console.log(targetCrewMember);
                crewMembers.forEach((crewMember) => {
                    // console.log(crewMembers);

                    if (crewMember == targetCrewMember) {
                        crewMember.classList.add("active-crew");
                        } else {
                            crewMember.classList.remove("active-crew");
                        }
                })
                
            }
        })
    });
    // for technology.html
    var transitMethods = document.querySelectorAll(".technology")
    const techInputs = document.querySelectorAll('input[name="techGroup"]');
    
        Array.from(techInputs).forEach((techInput) => {
            techInput.addEventListener("click", function (e) {
                console.log(techInput); 
                if (e.target.tagName == "INPUT") {
                    console.log(transitMethods);
                    const targetTechnology = document.querySelector(e.target.dataset.tech);
                    console.log(targetTechnology);
                    transitMethods.forEach((transitMethod) => {
                        console.log(transitMethod);
    
                        if (transitMethod == targetTechnology) {
                            transitMethod.classList.add("active-tech");
                            } else {
                                transitMethod.classList.remove("active-tech");
                            }
                    })
                    
                }
            })
        });

// console.log(labelMoon);
// console.log(labelMars);
// console.log(labelEuropa);
// console.log(inputs);