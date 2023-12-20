<template>
<main>
 <div class="relative h-[800px] mt-0 z-10 header-img max-w-[2000px] w-full m-auto">
   <div>
    <img src="https://i.ibb.co/MGXRBFt/FORSIDE-h-nd.png" class="hidden sm:visible left-[405px] h-[500px] scale-[2.1] absolute -translate-y-12 z-20" alt="">
   </div>
   <div class="w-full h-[400px] bg-[#256c2b] absolute bottom-0 ">
    <div class=" bg-[#000000] w-[10%] h-[600px] top-0 absolute z-30 opacity-20 clip sm:visible hidden">
   </div>
   <img src="https://i.ibb.co/q9Jd6px/Jesper-cropped.png" alt="" class="sm:h-96 h-48 absolute bottom-0 z-50 right-0 sm:translate-x-0 ">
   <div class=" bg-gradient-header w-[100%] h-[60px] absolute bottom-0 z-30"></div>
   
 </div>
 <div class="flex justify-end">
    <div class="bg-[#3a5246] sm:h-[500px] h-[630px] sm:w-[90%] absolute bottom-0 z-10 rounded-sm ">
        <article class="flex flex-col gap-10 justify-center sm:ml-28 ml-5 sm:mt-36 mt-5 text-white">
        <h1 class="text-5xl font-semibold tracking-wider">Dialog er nøgleordet...</h1>
        <p class=" w-[90%] sm:max-w-[700px]">I et samarbejde med IKR vil du opleve at få en aktiv medspiller med erfaring, kompetence og konkrete løsninger som kommer din organisation til gode. På kort og på langt sigt.</p>
        </article>
        <article class="flex flex-col sm:items-end w-[80%] ml-5 sm:ml-0 mt-5 sm:-translate-y-14 gap-3 font-semibold italic text-[#151414]">
            <p>Jesper Zangenberg<br> Indehaver & CEO </p>
            <p>Ring til Jesper: <a class="not-italic underline underline-offset-4" href="telto: +45 12 34 56 78 ">+45 12 34 56 78 </a></p>
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