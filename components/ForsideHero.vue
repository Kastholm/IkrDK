<template>
<main>
 <div class="relative max-h-[800px] h-[800px] mt-0 z-10 header-img max-w-[2000px] w-full m-auto">
   <div class="max-h-[800px] max-w-[2000px] w-full h-[800px] ">
    <img src="https://i.ibb.co/SfjKPHk/FORSIDE-h-nd.png" class=" handrespons handrespons2 top-[10%] left-[40%] max-h-[341px] absolute z-20" alt="">
   </div>
   <div class="w-full h-[400px] bg-[#256c2b] absolute bottom-0 ">
    <div class=" bg-[#000000] w-[10%] h-[600px] top-0 absolute z-30 opacity-20 clip handrespons">
   </div>
   <img src="https://i.ibb.co/MMGXgxy/Jesper-Z-frit-230x540px.png" alt="" class="sm:h-[450px] h-64 absolute bottom-0 z-50 right-3 sm:right-12 sm:translate-x-0 ">
   <div class=" bg-gradient-header w-[100%] h-[60px] absolute bottom-0 z-30"></div>
   
 </div>
 <div class="flex justify-end">
    <div class="bg-[#3a5246] sm:h-[500px] h-[630px] sm:w-[90%] absolute bottom-0 z-10 rounded-sm ">
        <article class="flex flex-col gap-10 justify-center sm:ml-28 ml-5 sm:mt-36 mt-5 text-white">
        <h1 class=" font-semibold tracking-wider">Dialog er nøgleordet...</h1>
        <p class=" w-[90%] sm:max-w-[700px]">I et samarbejde med IKR vil du opleve at få en aktiv medspiller med erfaring, kompetence og konkrete løsninger som kommer din organisation til gode. På kort og på langt sigt.</p>
        </article>
        <article class="flex flex-col sm:items-end w-[80%] sm:ml-0 mt-5 translate-y-10 sm:-translate-y-36 gap-3 ml-24 font-semibold italic text-[#151414] sm:max-w-full max-w-[100px]">
            <p class="text-[20px]">Jesper Zangenberg<br> Indehaver & CEO </p>
            <p class=" text-[17px]">Ring til Jesper: <br> <a class="not-italic underline underline-offset-4" href="telto: +45 12 34 56 78 ">+45 12 34 56 78 </a></p>
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


 
.clip {
    clip-path: polygon(1% 0, 100% 0, 100% 87%, 0% 100%);
}
.header-img {
    background-image: url('https://i.ibb.co/f0Fg0Xw/FORSIDE-BILLEDE-2.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
}

.bg-gradient-header {
    background: linear-gradient(to bottom, rgba(37, 108, 43, 1), rgba(255, 255, 255, 0.1));
}
</style>