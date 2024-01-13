<template>
<main>
 <div class="relative max-h-[800px] sm:max-h-[900px] h-[800px] sm:h-[900px] z-10 header-img max-w-[2000px] w-full m-auto overlay">
    
   <div class="w-full h-[450px] bg-[#1a5b0b] bg-gradient-header absolute bottom-0 ">
    
 </div>
 <div class="flex justify-end">
    <div class="sm:bg-[#0a3700] bg-[#0a3700] sm:h-[350px] h-[500px] sm:w-[90%] absolute bottom-40 z-20 rounded-sm ">
        <article class="flex flex-col gap-10 justify-center sm:ml-28 ml-5 sm:mt-8 mt-5 text-white">
        <h1 class=" font-semibold tracking-wider leading-[65px] max-w-[900px]">Vi gør det nemt for din virksomhed</h1>
        <p class=" w-[90%] sm:max-w-[700px] mt-6 sm:mt-0 mb-7">”Komplekse forretningsområder er en stor del af vores konsulenters arbejde hver eneste dag.” </p>
        </article>
        
    </div>
   </div>
 </div>
</main>
</template>

<script>
export default {

}
</script>

<style scoped>
@media only screen and (max-width: 767px) {
    .handrespons {
        display: none;
    }
}

@media only screen and (max-width: 1284px) {
    .handrespons2 {
        transform: translatex(-40px) translatey(-30px);
    }
}

@media screen and (min-width: 1285px) and (max-width: 1391px) {
  .handrespons2 {
        transform: translatex(-20px) translatey(-15px);
  }
}

@media only screen and (min-width: 1600px) {
    .handrespons2 {
        transform: translatex(27px) translateY(25px) scale(1.1);
    }
}

@media screen and (min-width: 1285px) and (max-width: 1391px) {
  .handrespons2 {
        transform: translatex(-10px) translatey(-15px);
  }
}

@media screen and (min-width: 1450px) and (max-width: 1599px) {
  .handrespons2 {
        transform: translatex(16px) translatey(10px);
  }
}

@media only screen and (min-width: 1600px) {
    .handrespons2 {
        transform: translatex(41px) translateY(25px) ;
    }
}

@media only screen and (min-width: 1650px) {
    .handrespons2 {
        transform: translatex(80px) translateY(5px) scale(1.1);
    }
}

@media screen and (min-width: 640px) and (max-width: 1355px) {
  .person-respons {
        right: 10px;
        
      
  }
}


@media screen and (min-width: 1800px) {
  .header-text-respons {
        transform: translatex(60px);
  }
}

@media screen and (min-width: 1550px) and (max-width:1790px) {
  .header-text-respons {
        transform: translatex(30px);
  }
}


 
.clip {
    clip-path: polygon(1% 0, 100% 0, 100% 87%, 0% 100%);
}
.header-img {
    background-image: url('https://i.ibb.co/86MXFWw/TOPBILLEDE-FAQ.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
}

.bg-gradient-header {
    background: #114d07 linear-gradient(to top, rgb(139, 162, 139), rgba(31, 115, 31, 0.8) 30%, rgba(17, 77, 7, 1) 100%);
    
}

.overlay::before {
  content: '';
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

}
</style>