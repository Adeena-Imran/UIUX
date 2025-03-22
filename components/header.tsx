// import Image from "next/image";
// import React from "react";



// function Header(){
//     return(
//         <div className="width-[1440px] height-[100px] w-full max-w-screen-xl mx-auto ">
//             <div className="width-[1286px] height-[41px] Gap-[5px] mt-[29px] pl-[54px] pr-[54px] flex justify-between items-center ">
//             <Image 
//         src={"/images/Frame 168.png"}
//         alt="next_image"
//         width={185}
//         height={41}
//         priority/>
//             <nav className="md:flex space-x-20     justify-space-between">
//                 <a href ="Home">Home</a>
//                 <a href ="Shop">Shop</a>
//                 <a href ="Blog">Blog</a>
//                 <a href ="Contact">Contact</a>
//               <h1  className="hidden md:flex space-x-10 justify-space-between">
//                   <Image className="pl-[2.33px] w-7 h-7"
//         src={"/images/account.png"}
//         alt="image"
//         width={22.33}
//         height={17.67}
//       />



// <Image 
//         src={"/images/search.png"}
//         alt="image"
//         width={22.17}
//         height={22.17}/> 

// <Image 
//         src={"/images/heart.png"}
//         alt="image"
//         width={22.33}
//         height={19.81}
//         className="w-7 h-7"/>

// <Image 
//         src={"/images/cart.png"}
//         alt="image"
//         width={23.53}
//         height={21.06}
//         className="w-7 h-7"/>

//                 </h1> 



//             </nav>
            
//             </div>
             
            


//         </div>
//     )
// }



// export default Header




import Image from "next/image";


function Header() {
  

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <Image
          src={"/images/Frame 168.png"}
          alt="next_image"
          width={185}
          height={41}
          priority
        />

        
        <nav
          className={
              "hidden md:flex space-x-8 justify-between items-center w-full md:w-auto"
           }
        >
          <a href="Home" className="text-lg">Home</a>
          <a href="Shop" className="text-lg">Shop</a>
          <a href="Blog" className="text-lg">Blog</a>
          <a href="Contact" className="text-lg">Contact</a>
        </nav>

        <div className="hidden md:flex space-x-10 items-center">
          <Image
            className="w-7 h-7"
            src={"/images/account.png"}
            alt="account"
            width={22.33}
            height={17.67}
          />
          <Image
            className="w-7 h-7"
            src={"/images/search.png"}
            alt="search"
            width={22.17}
            height={22.17}
          />
          <Image
            className="w-7 h-7"
            src={"/images/heart.png"}
            alt="heart"
            width={22.33}
            height={19.81}
          />
          <Image
            className="w-7 h-7"
            src={"/images/cart.png"}
            alt="cart"
            width={23.53}
            height={21.06}
          />
        </div>
      </div>

      <div className="md:hidden flex flex-col space-y-4 py-4">
        <a href="Home" className="text-lg">Home</a>
        <a href="Shop" className="text-lg">Shop</a>
        <a href="Blog" className="text-lg">Blog</a>
        <a href="Contact" className="text-lg">Contact</a>
      </div>
    </div>
  );
}

export default Header;

