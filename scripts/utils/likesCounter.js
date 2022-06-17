export function likesCounter(){
    // get all like container element and listen click event
    document.querySelectorAll(".like-container").forEach((elt) => {
        elt.addEventListener("click", (event) => {
        console.log("like feature",elt );

       // get clicked button
       //elt => clicked element 
      const currentHeartValue = elt.querySelector(".like-button");
      const currentHeartIcon = elt.querySelector("i.fas.fa-heart");

      // get current number of likes
      const currentlikes = elt.querySelector(".numbOfLike");
      //get total likes
      const totalOfLike = document.getElementById("totalOfLike");
         // nombre de like total
     // convert string to number
     //(oCr you can add +totalOfLike.textontent)
      let currentNbrLike = Number(totalOfLike.textContent);

      currentHeartIcon.classList.toggle("active");
      currentHeartValue.classList.toggle("active");

      if (
        currentHeartIcon.classList.contains("active") &&
        currentHeartValue.classList.contains("active")
        ) {
          //change color
        currentHeartIcon.style.color = "red";
        currentlikes.textContent++;

        totalOfLike.textContent = ++currentNbrLike;
      } else {
          // back to initial color
        currentHeartIcon.style.color = "black";
        // decrement likes value in second clic
        currentlikes.textContent--;

        totalOfLike.textContent = --currentNbrLike;
      }
        });
    });
}