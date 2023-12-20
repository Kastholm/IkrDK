<template>
<main class=" overflow-x-hidden">
  <section class="w-full flex justify-center mt-40 max-h-[390px] relative">
    <div class="bgimg flex flex-col sm:flex-row justify-around items-center gap-3 rounded-md max-w-full sm:max-w-[1000px] ">
        <div class="flex flex-col mb-20 sm:ml-20 sm:mt-0 mt-14 gap-5 sm:text-start text-center ">
        <h4> Tæt på det hele</h4>
        <p class="w-[90%] max-w-[600px] font-semibold"> Som en del af godset Hørbygård i Nordvestsjælland har IKR udgangspunkt fra det gamle kampestenshus. Midt i den skønneste natur, nær skov og fjord. 5 minutter til motorvejen til København og 30 minutter til færgen til Århus. Tæt på det hele – også vores kunder.</p>
        </div>
        <img src="https://i.ibb.co/db0jP2z/IKR-0009.jpg" class="max-w-[400px] max-h-[280px] sm:mr-16 rounded-sm sm:-translate-y-0 -translate-y-12" alt="">
    </div>
    
  </section>

  <section class="flex justify-center w-full relative sm:mt-0 mt-72">
<figure class="h-[200px] min-h-[200px] w-[180px] bg-[#2c2c2c] clip3 absolute left-0 top-0 -translate-y-36 sm:-translate-y-5"></figure>
 <div class="flex flex-col mt-20 items-center gap-5 w-[60%] sm:text-start text-center">
    <h2>🙷 IKRs assistanse har givet os skarpere performance og compliance.. 🙷</h2>
    <p> Læs hvordan nogle af vores kunder har vurderet samarbejdet og de resultater processen har givet.</p>
    <NuxtLink to="#" class="font-semibold underline underline-offset-2"> Se mere her </NuxtLink>
 </div>
  </section>
</main>
</template>

<script>

</script>

<style>
.bgimg {
    background-image: url('https://i.ibb.co/98TPJyR/IKR-gr-n-baggrund-4000x2200px-2-2-1.jpg');
    height:353px;
    width:70%;
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