 // Favourite 
 function toggleFav(){
    const fav = document.querySelector('.Fav');
    fav.classList.toggle('active')
  }    

//close buton
  function toggleClose(){
    const chh = document.querySelector('.more-text');
    chh.classList.toggle('active')
  }
// more button in header
  const click1 = document.querySelector("#down");
    const down1 = document.querySelector(".down1");
    const click2 = document.querySelector("#other");
    const down2 = document.querySelector(".other1");

    click1.addEventListener('click', ()=>{
        if(down1.style.display === 'none'){
            down1.style.display = 'block';
        } else {
            down1.style.display = 'none';
        }
    });
// moving header
    window.addEventListener("scroll", function(){
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
   }) ;
// scroll window
  window.onscroll = () => {
    if (this.scrollY >= 900) {
       document.querySelector(".arrowHome i").style.right = "10px";
    } else {
       document.querySelector(".arrowHome i").style.right = "-40px";
    }
  };       