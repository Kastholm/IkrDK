<template>
<main>
 <div class="relative max-h-[800px] sm:max-h-[900px] h-[800px] sm:h-[900px] z-10 header-img max-w-[2000px] w-full m-auto overlay">
  
   <div class="w-full h-[450px] bg-[#1a5b0b] bg-gradient-header absolute bottom-0 ">
   <img src="https://i.ibb.co/DYkgKFk/Henrik.png" alt="" class="sm:h-[450px] person-respons h-64 absolute bottom-0 z-50 right-3 sm:right-12 sm:translate-x-0 "> 
 </div>
 <div class="flex justify-end">
    <div class="sm:bg-[#0a3700] bg-[#0a3700] sm:h-[350px] h-[500px] sm:w-[90%] absolute bottom-40 z-20 rounded-sm ">
        <article class="flex flex-col gap-10 justify-center sm:ml-28 ml-5 sm:mt-8 mt-5 text-white">
        <h1 class=" font-semibold tracking-wider leading-[65px] max-w-[900px]">”Vi er som loyal partner den resurse I står og mangler.”</h1>
        <p class=" w-[90%] sm:max-w-[700px] mt-6 sm:mt-0 mb-7">I et samarbejde med IKR opnår I fuld gennemsigtighed i jeres indkøbsaftaler således, at I fastholder fokus på vedligeholdelse af hver aftale, der forbliver aktiv og målrettet efter jeres behov. </p>
        </article>
        <article class="flex text-start sm:text-end flex-col sm:items-end w-[78%] 2xl:w-[82%] ml-5 sm:ml-0 sm:mt-12 mt-[70px] gap-3 italic  text-[#000000] sm:max-w-full max-w-[100px]">
          <p class="text-[20px] 2xl:text-[23px]">Henrik Nielsen<br> Direktør IKR</p>
            <p class=" text-[20px] 2xl:text-[21px]">Ring til Henrik:  <a class="person-text-respons not-italic font-bold hover:border-b-[0.13rem] border-black" href="tel: +45 41 31 55 69 ">+45 41 31 55 69</a></p>
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
    background-image: url('https://i.ibb.co/nR1Sdyq/topbillede-ydelser-1.jpg');
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