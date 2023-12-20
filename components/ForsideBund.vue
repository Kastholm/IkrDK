<template>
<main class=" overflow-x-hidden">
  <section class="w-full flex justify-center mt-40 max-h-[390px] relative">
    <div class="bgimg flex flex-col sm:flex-row justify-around items-center max-w-full sm:max-w-full">
        <div class="flex flex-col mb-20 sm:ml-20 sm:mt-0 gap-10 sm:text-start text-center sm:-translate-y-16 2xl:-translate-y-2">
        <h4> Tæt på det hele</h4>
        <p class="w-[90%] m-auto sm:m-0 ikrfont max-w-[700px] font-semibold"> Som en del af godset Hørbygård i Nordvestsjælland har IKR udgangspunkt fra det gamle kampestenshus. Midt i den skønneste natur, nær skov og fjord. 5 minutter til motorvejen til København og 30 minutter til færgen til Århus. Tæt på det hele – også vores kunder.</p>
        </div>
        <img src="https://i.ibb.co/db0jP2z/IKR-0009.jpg" class="sm:max-w-[500px] max-h-[400px] sm:mr-16 rounded-sm mt-10 sm:mt-0  -translate-y-12 sm:-translate-y-24 2xl:-translate-y-10 " alt="">
    </div>
    
  </section>

  <section class="flex justify-center w-full relative sm:mt-20 mt-72">
<figure class="h-[200px] min-h-[200px] w-[180px] bg-[#2c2c2c] clip3 absolute left-0 top-0 -translate-y-36 sm:-translate-y-5 "></figure>
 <div class="flex flex-col mt-20 items-center gap-5 w-[60%] sm:text-start text-center md:mt-0 2xl:mt-72">
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
    background-image: url('https://i.ibb.co/jTpr9xR/IKR-gr-n-baggrund-4000x1000px-1.jpg');
    height:560px;
    
    width:100%;
    background-size: contain;
    background-repeat: no-repeat;
}

@media only screen and (max-width: 767px) {
    .bgimg {
        background-image: none;
    }
}

.clip3 {
    clip-path: polygon(0 0, 100% 49%, 100% 100%, 0 55%);
}
</style>