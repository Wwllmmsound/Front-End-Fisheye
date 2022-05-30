export function likesCounter(){
    // get all like container element and listen click event 
    document.querySelectorAll(".like-container").forEach((elt) => {
        elt.addEventListener("click", (event) => {
        console.log("like feature",elt );
     
       // get clicked button
       //elt => clicked element 
      const currentHeartValue = elt.querySelector(".like-number");
      const currentHeartIcon = elt.querySelector("i.fas.fa-heart");
      
      // get current number of likes
      const currentlikes=   elt.querySelector(".numbOfLike");
      //get total likes
      const totalOfLike = document.getElementById("totalOfLike");
         // nombre de like total
     // convert string to number 
     //(or you can add +totalOfLike.textContent)
      let currentNbrLike = Number(totalOfLike.textContent);
      
      currentHeartIcon.classList.toggle("active");
      currentHeartValue.classList.toggle("active");
   
      if (
        currentHeartIcon.classList.contains("active") &&
        currentHeartValue.classList.contains("active")
      ) {
          //change color 
        currentHeartIcon.style.color = "#db8876";
        currentlikes.textContent++;

        totalOfLike.textContent = ++currentNbrLike;
      } else {
          // back to initial color
        currentHeartIcon.style.color = "#901c1c";
        // decrement likes value in second clic
        currentlikes.textContent--;

        totalOfLike.textContent = --currentNbrLike;
      }
        });
    });
}