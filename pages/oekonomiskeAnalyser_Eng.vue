<template>
  <NuxtLayout :name="layout">
  <AnalyserUnderside_Eng />
  <div class="group relative z-50 hidden sm:block">
 <div class="fixed bg-[#256c2b] text-white h-[200px] hover:h-[400px] shadow-md shadow-[#b5b3b3] w-[50px] hover:w-[400px] left-0 bottom-[34%] transition-all hover:border-none border-e-4 border-b-[3px] border-solid  border-[#0a3700] rounded-e-xl">
    <p class="absolute right-3 top-1/2 -translate-y-4">➤</p>
  <ul class="opacity-0 group-hover:opacity-100 visibility-hidden group-hover:visibility-visible transition-opacity flex flex-col gap-10 justify-center items-center h-[100%] relative">
    <a href="/oekonomiskeAnalyser_Eng"><li class="border-[2.5px] border-solid border-white min-w-[280px] transition-all hover:scale-110 font-semibold text-center px-10 min py-5 bg-[#0a3700c4] text-[20px] shadow-2xl rounded-xl">Økonomiske Analyser</li></a>
    <a href="/udbudUnderside_Eng"><li class="border-[2.5px] border-solid border-white min-w-[280px] transition-all hover:scale-110 font-semibold px-10 py-5 hover:bg-[#0a3700c4] text-[20px] shadow-2xl rounded-xl">Udbud & Konkurrence</li></a>
    <a href="/aftaleUnderside_Eng"><li class="border-[2.5px] border-solid border-white min-w-[280px] transition-all hover:scale-110 font-semibold text-center px-10 py-5 hover:bg-[#0a3700c4] text-[20px] shadow-2xl rounded-xl">Aftalestyring</li></a>
  </ul>
 </div>
</div>
</NuxtLayout>
</template>

<script>
export default {

}
</script>

<style>
.clip2 {
    clip-path: polygon(0 51%, 100% 0, 100% 51%, 0% 100%);
}

.clip4 {
    clip-path: polygon(0 35%, 63% 0, 63% 65%, 0 100%);
}
</style>