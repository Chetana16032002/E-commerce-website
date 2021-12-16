// here nav function is created
const createNav=()=>{
  //select any element using querySelector method
  let nav=document.querySelector('.navbar');
  nav.innerHTML=`
      <div class="nav">
         <img src="img/black-logo.png"class="brand-logo" alt="logo">
         <div class="nav-items">
           <div class="search">
             <input type="text"class="searchbox"placeholder="search brand ,product" name="" value="">
             <button class="search-btn"type="button" name="button">search</button>
           </div>

           <a href="#"><img src="img/user.png" alt=""></a>
           <a href="#"><img src="img/cart.png" alt=""></a>
         </div>

      </div>
      <ul class="links-container">
           <li class="link-item"><a href="#" class="link">Home</a></li>
           <li class="link-item"><a href="#" class="link">Women</a></li>
           <li class="link-item"><a href="#" class="link">Men</a></li>
           <li class="link-item"><a href="#" class="link">Kids</a></li>
           <li class="link-item"><a href="#" class="link">Accessories</a></li>

      </ul>
  `;

}
createNav();
