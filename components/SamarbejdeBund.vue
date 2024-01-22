<template>
<main class=" overflow-x-hidden">
  <section class="w-full flex justify-start items-center mt-24 2xl:mt-40 relative">
    <div class="bgimg flex flex-col sm:flex-row justify-around 2xl:justify-center items-center max-w-full sm:max-w-full gap-[0px] 2xl:gap-[400px]">
        <div class="flex flex-col sm:ml-20 gap-4 bund-container-respons sm:text-start text-center items-start">
        <h4 class="bund-overskrift-respons bg-[#86ab7f] max-w-[281px] rounded-2xl py-3 px-5 bg-opacity-50"> Tæt på det hele</h4>
        <p class="w-[90%] m-auto sm:m-0 ikrfont max-w-[700px] font-semibold bund-text-respons bg-[#86ab7f] rounded-2xl py-3 px-5 bg-opacity-50"> Som en del af godset Hørbygård i Nordvestsjælland har IKR udgangspunkt fra det gamle kampestenshus. Midt i den skønneste natur, nær skov og fjord. <br> 5 minutter til motorvejen til København og 30 minutter til færgen til Århus. Tæt på det hele – også vores kunder.</p>
        </div>
        <img src="https://i.ibb.co/yWyDnYq/Stenhus-og-slot.jpg" class="bund-billede-respons sm:max-w-[500px] max-h-[400px] sm:mr-16 rounded-md mt-10 sm:mt-0 shadow-2xl" alt="">
    </div>
    
  </section>

  <section class="flex justify-center w-full relative sm:mt-20 mt-40 lg:mt-10">
<figure class="h-[200px] min-h-[200px] w-[180px] bg-[#2c2c2c] clip3 absolute left-0 top-0 -translate-y-36 sm:-translate-y-5 "></figure>
 <div class="flex flex-col mt-20 items-center gap-5 w-[60%] sm:text-start text-center md:mt-0 2xl:mt-28">
    <h2>🙷 IKRs assistance har givet os skarpere performance og compliance.. 🙷</h2>
    <p> Læs hvordan nogle af vores kunder har vurderet samarbejdet og de resultater processen har givet.</p>
    <NuxtLink to="#" class="font-semibold underline underline-offset-2"> Se mere her </NuxtLink>
 </div>
  </section>
</main>
</template>

<script>

</script>

<style>

.ikrfont {
  font-size: 24px;
}
.bgimg {
    background-image: url('https://i.ibb.co/C7BQF8Y/IKR-gr-n-baggrund-4000x1000px-NY.jpg');
    height:560px;
    width:100%;
    min-height: 560px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

@media only screen and (max-width: 767px) {
    .bgimg {
        background-image: none;
    }
}


@media screen and (min-width: 800px) and (max-width: 1250px) {
  .bund-overskrift-respons {
        font-size: 30px;
        
  }
}

@media screen and (min-width: 800px) and (max-width: 1250px) {
  .bund-container-respons {
        gap: 10px;
        
  }
}

@media screen and (min-width: 1535px) and (max-width: 1650px) {
  .bund-container-respons {
        min-width: 550px;
        gap:16px;
        
  }
}

@media screen and (min-width: 800px) and (max-width: 1250px) {
  .bund-text-respons {
        font-size:19px;
        
  }
}

@media screen and (min-width: 800px) and (max-width: 1280px) {
  .bund-billede-respons {
        height: 250px;
        
  }
}

.clip3 {
    clip-path: polygon(0 0, 100% 49%, 100% 100%, 0 55%);
}
</style>