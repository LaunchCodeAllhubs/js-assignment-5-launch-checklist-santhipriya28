// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper");

//const { sample } = require("./scriptHelper");

window.addEventListener("load", function() {

    let form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
     
      event.preventDefault();
      let pilotNameInput = document.getElementById("pilotName");
      let copilotNameInput = document.getElementById("copilotName");
      let fuelLevelInput = document.getElementById("fuelLevel");
      let cargoMassInput=document.getElementById("cargoMass");
      let list= document.getElementById("faultyItems");
    
     list.style.visibility = "hidden";
    
      
      if (validateInput(pilotNameInput.value) === `Empty`|| validateInput(copilotNameInput.value) === `Empty`|| 
      validateInput(fuelLevelInput.value) === `Empty`||validateInput(cargoMassInput.value) === `Empty`) {
          alert(`All fields are required`);
      }
      
      else if (validateInput(fuelLevelInput.value) === 'Not a Number' || validateInput(cargoMassInput.value) === 'Not a Number') {
          alert(`Please enter numerical values for Fuel Level and Cargo Mass`);
      } else if (validateInput(pilotNameInput.value)===`Is a Number`||validateInput(copilotNameInput.value)===`Is a Number`) {
          alert('Please do not enter numbers for name of pilot or co-pilot');
      } 
      else{
      formSubmission(document,list,pilotNameInput.value,copilotNameInput.value,fuelLevelInput.value,cargoMassInput.value);
      }
        
    });
       //list.style.visibility = "hidden";
        let listedPlanets;
       // Set listedPlanetsResponse equal to the value returned by calling myFetch()
       let listedPlanetsResponse = myFetch();
       listedPlanetsResponse.then(function (result) {
           listedPlanets = result;
           console.log(listedPlanets);
       }).then(function () {
           console.log(listedPlanets);
           // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
           let planet = pickPlanet(listedPlanets);
    
           let name = planet.name;
           let diameter = planet.diameter;
           let star = planet.star;
           let distance = planet.distance;
           let imageUrl = planet.image;
           let moons = planet.moons;
        
    
           addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
        });
        
       
      
       
    });