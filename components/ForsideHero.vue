<template>
<main>
 <div class="relative max-h-[800px] sm:max-h-[900px] sm:mt-28 h-[800px] sm:h-[1200px] z-10 header-img max-w-[2000px] w-full m-auto overlay">
    <p class="text-white text-[40px] sm:text-[80px] font-bold absolute left-[10px] sm:left-[140px] top-3 sm:top-28 z-50 leading-0 whitespace-nowrap sm:leading-[110px] header-text-respons ">Fokus på økonomisk <br> råderum..</p>
   <div class="max-h-[800px] max-w-[2000px] w-full h-[800px] ">
    <img src="https://i.ibb.co/pXTDRjq/Loes-haand.png" class=" handrespons handrespons2 top-[14.6%] left-[38.5%] h-[341px] absolute z-40" alt="">
   </div>
   <div class="w-full h-[450px] bg-[#1a5b0b] bg-gradient-header absolute bottom-0 ">
   <img src="https://i.ibb.co/SyKpnTM/Jesper-1.png" alt="" class="sm:h-[450px] person-respons h-64 absolute bottom-0 z-50 right-3 sm:right-12 sm:translate-x-0 "> 
 </div>
 <div class="flex justify-end">
    <div class="sm:bg-[#0a3700] bg-[#0a3700] sm:h-[350px] h-[500px] sm:w-[90%] absolute bottom-40 z-20 rounded-sm ">
        <article class="flex flex-col gap-10 justify-center sm:ml-28 ml-5 sm:mt-14 mt-5 text-white">
        <h1 class=" font-semibold tracking-wider">Dialog er nøgleordet</h1>
        <p class=" w-[90%] sm:max-w-[700px] mt-6 sm:mt-0 mb-7">I et samarbejde med IKR vil du opleve at få en aktiv medspiller med erfaring, kompetence og konkrete løsninger som kommer din organisation til gode. På kort og på langt sigt.</p>
        </article>
        <article class="flex text-start sm:text-end flex-col sm:items-end w-[78%] 2xl:w-[79%] ml-5 sm:ml-0 sm:mt-5 mt-[70px] sm:translate-y-4 gap-3 italic text-[#000000] sm:max-w-full max-w-[100px]">
            <p class="text-[20px] 2xl:text-[23px]">Jesper Zangenberg<br> Indehaver </p>
            <p class=" text-[20px] 2xl:text-[21px] ">Ring til Jesper:  <a class="person-text-respons not-italic font-bold hover:border-b-[0.13rem] border-black" href="tel: +45 28 18 91 94 ">+45 28 18 91 94 </a></p>
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

<style>


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
    background-image: url('https://i.ibb.co/y51CKLm/Billede-med-haand-1.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
}

.bg-gradient-header {
    background: #114d07 linear-gradient(to top, rgb(139, 162, 139), rgba(31, 115, 31, 0.8) 30%, rgba(17, 77, 7, 1) 100%);
    
}


</style>