<template>
<main>
 <div class="relative max-h-[800px] sm:max-h-[900px] h-[800px] sm:h-[900px] z-10 header-img max-w-[2000px] w-full m-auto">
    <p class="text-white text-[40px] sm:text-[80px] font-bold absolute left-[20px] sm:left-[140px] top-10 sm:top-28 z-50 leading-0 whitespace-nowrap sm:leading-[80px] header-text-respons">Fokus på <br>økonomisk råderum..</p>
   <div class="max-h-[800px] max-w-[2000px] w-full h-[800px] ">
    <img src="https://i.ibb.co/pXTDRjq/Loes-haand.png" class=" handrespons handrespons2 top-[14.6%] left-[38.5%] h-[341px] absolute z-40" alt="">
   </div>
   <div class="w-full h-[400px] bg-[#1a5b0b] absolute bottom-0 ">
    <div class=" bg-[#000000] w-[10%] h-[600px] top-0 absolute z-30 opacity-20 clip handrespons">
   </div>
   <img src="https://i.ibb.co/B4hbGxp/Jesper-Z-NY.png" alt="" class="sm:h-[450px] person-respons h-64 absolute bottom-0 z-50 right-3 sm:right-12 sm:translate-x-0 ">
   <div class=" bg-gradient-header w-[100%] h-[60px] absolute bottom-0 z-30"></div>
   
 </div>
 <div class="flex justify-end">
    <div class="sm:bg-[#0a3700e2] bg-[#0a3700] sm:h-[500px] h-[630px] sm:w-[90%] absolute bottom-0 z-20 rounded-sm ">
        <article class="flex flex-col gap-10 justify-center sm:ml-28 ml-5 sm:mt-28 mt-5 text-white">
        <h1 class=" font-semibold tracking-wider">Dialog er nøgleordet...</h1>
        <p class=" w-[90%] sm:max-w-[700px] mt-6 sm:mt-0 mb-7">I et samarbejde med IKR vil du opleve at få en aktiv medspiller med erfaring, kompetence og konkrete løsninger som kommer din organisation til gode. På kort og på langt sigt.</p>
        </article>
        <article id="person-text-container-respons" class="flex text-start sm:text-end flex-col sm:items-end w-[80%] ml-24 sm:ml-0 mt-5 sm:-translate-y-36 gap-3 italic text-[#ffffff] sm:max-w-full max-w-[100px]">
            <p class="text-[20px] person-text-respons">Jesper Zangenberg<br> Indehaver & CEO </p>
            <p class=" text-[17px] person-text-respons">Ring til Jesper: <br> <a class="person-text-respons not-italic hover:underline hover:underline-offset-4" href="telto: +45 12 34 56 78 ">+45 12 34 56 78 </a></p>
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
        transform: translatex(20px) translatey(10px) scale(1.2);
  }
}

@media only screen and (min-width: 1600px) {
    .handrespons2 {
        transform: translatex(27px) translateY(25px) scale(1.2);
    }
}

@media only screen and (min-width: 1650px) {
    .handrespons2 {
        transform: translatex(58px) translateY(30px) scale(1.2);
    }
}

@media screen and (min-width: 640px) and (max-width: 1355px) {
  .person-respons {
        right: 10px;
        height: 340px;
        bottom: 0;
  }
}

@media screen and (min-width: 640px) and (max-width: 1355px) {
  #person-text-container-respons {
        
        transform: translatey(-80px);
        gap: 0px;
        width: 85%;
  }
}

@media screen and (min-width: 640px) and (max-width: 1355px) {
  .person-text-respons {
        font-size: 16px;
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
    background: linear-gradient(to bottom, rgba(37, 108, 43, 1), rgba(255, 255, 255, 0.435));
}
</style>