<template>
  <footer class="block min-h-[200px] mt-40">
    <div class="flex-col gap-10 sm:gap-0 sm:flex-row flex w-full justify-around items-center">
        <NuxtLink to="/"><img src="https://i.ibb.co/ZWCZJRk/IKR-Main-Logo-600x450-cropped.jpg" class="max-w-[390px]"></NuxtLink>
        
        <div class="flex flex-col gap-2 max-w-[250px]">
         <div class="flex gap-2 flex-col items-start justify-center text-center">
            <h5 class="mb-2">Links</h5>
            <NuxtLink class="text-[20px] hover:underline hover:underline-offset-4" to="/">Hjem</NuxtLink>
            <NuxtLink class="text-[20px] hover:underline hover:underline-offset-4" to="samarbejde">Samarbejde </NuxtLink>
            <NuxtLink class="text-[20px] hover:underline hover:underline-offset-4" to="ydelser">Ydelser </NuxtLink>
            <NuxtLink class="text-[20px] hover:underline hover:underline-offset-4" to="vi-er">Vi er </NuxtLink>
            <NuxtLink class="text-[20px] hover:underline hover:underline-offset-4" to="faq">FAQ </NuxtLink>
            <NuxtLink class="text-[20px] hover:underline hover:underline-offset-4" to="kontakt">Kontakt </NuxtLink>
         </div>
         
         
        </div>
        <div class="flex flex-col  max-w-[250px] text-center">
         <div class="flex flex-col">
            <h5>Adresse</h5>
            <p class="mt-4">Tuse Næs Vej 7A, 4300 Holbæk, Denmark</p>
         </div>
         <div class="flex flex-col mt-6">
            <h5>Telefon</h5>
            <a href="tel:+45 88 27 63 33"><p class="mt-4">+45 88 27 63 33</p></a>
         </div>
         <div class="flex flex-col mt-6">
            <h5>Email</h5>
            <a href="mailto:mail@ikrcg.com"><p class="mt-4">mail@ikrcg.com</p></a>
         </div>
        </div>
        <div class="flex flex-col gap-10">
        <NuxtLink to="kontakt"><button class="text-white hover:scale-110 transition-all bg-[#2c2c2c] h-[60px] w-[350px] rounded-sm"><h5>KONTAKT OS</h5></button></NuxtLink>
        <img src="https://i.ibb.co/6wp7Hr0/display.png">
        </div>     
    </div>
    <div class="h-10"></div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>