<template>
  <section class="fixed top-0 z-50 w-screen respons-desktop">
  <header class="relative h-fit sm:max-w-full max-w-[40px] z-50">
    <nav class="relative flex justify-center items-center border-[#256c2b] border-b-4 max-h-[200px]">
      <ul class="flex gap-8 absolute font-semibold z-50 pt-10 menuGapTablet">
        <li :class="{ 'active-link': $route.path === '/index_Eng' }" class="hover:underline hover:decoration-[2px] hover:underline-offset-4">
          <NuxtLink to="/index_Eng">HOME</NuxtLink>
        </li>
        <li :class="{ 'active-link': $route.path === '/samarbejde_Eng' }" class="hover:underline hover:decoration-[2px] hover:underline-offset-4">
          <NuxtLink to="/samarbejde_Eng">COLLABORATION</NuxtLink>
        </li>
        <li :class="{ 'active-link': $route.path === '/ydelser_Eng' }" class="hover:underline hover:decoration-[2px] hover:underline-offset-4">
          <NuxtLink to="/ydelser_Eng">SERVICES</NuxtLink>
        </li>
        <li :class="{ 'active-link': $route.path === '/vi-er_Eng' }" class="hover:underline hover:decoration-[2px] hover:underline-offset-4">
          <NuxtLink to="/vi-er_Eng">WE ARE</NuxtLink>
        </li>
        <li :class="{ 'active-link': $route.path === '/faq_Eng' }" class="hover:underline hover:decoration-[2px] hover:underline-offset-4">
          <NuxtLink to="/faq_Eng">FAQ</NuxtLink>
        </li>
        
      </ul>
      <NuxtLink to="/index_Eng"><img src="https://i.ibb.co/JCjnNn8/IKR-Without-Slogan-2400x1800.jpg" class="absolute left-24 2xl:left-36 h-[90px] w-fit top-3 menuImgTablet" alt="#"></NuxtLink>
      <div class="absolute right-16 font-semibold top-3 p-6 cursor-pointer text-[#919995] flex gap-3">
        <li class="  hover:scale-110 transition-all mt-[20px] cursor-pointer bg-[#256c2b] text-white px-4 pb-1 rounded-md">
            <NuxtLink class="translate-y-10" to="/kontakt_Eng">CONTACT</NuxtLink>
          </li>
        <NuxtLink to="/index_Eng"><img src="https://i.ibb.co/P1yfgVt/Flag-of-the-United-Kingdom-3-5-svg.webp" class="h-[40px] w-[40px] rounded-[50%] hover:rounded-lg transition-all ml-8 md:ml-[4vw]"></NuxtLink>
          <NuxtLink to="/"><img src="https://i.ibb.co/jZs3yf6/Dansk-flag383594.jpg" class="h-[40px] w-[40px] rounded-[50%] hover:rounded-lg transition-all"></NuxtLink>
            <!-- <NuxtLink to="/"><img src="https://i.ibb.co/bHq9yTg/Svensk-flag693684.jpg" class="h-[40px] w-[40px] rounded-[50%] hover:rounded-lg transition-all"></NuxtLink> Æ-->
    </div>
    </nav>
  </header>
</section>

<section class="">
<div role="navigation" class="respons-mobil z-50">
  <div id="menuToggle">
    <!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
    -->
    <input type="checkbox" />
    
    <!--
    Some spans to act as a hamburger.
    
    They are acting like a real hamburger,
    not that McDonalds stuff.
    -->
    <span></span>
    <span></span>
    <span></span>
    
    <ul id="menu">
      <li :class="{ 'active-link': $route.path === '/index_Eng' }" class="hover:underline hover:decoration-[2px] hover:underline-offset-4">
          <NuxtLink to="/index_Eng">HOME</NuxtLink>
        </li>
        <li :class="{ 'active-link': $route.path === '/samarbejde_Eng' }" class="hover:underline hover:decoration-[2px] hover:underline-offset-4">
          <NuxtLink to="/samarbejde_Eng">COLLABORATION</NuxtLink>
        </li>
        <li :class="{ 'active-link': $route.path === '/ydelser_Eng' }" class="hover:underline hover:decoration-[2px] hover:underline-offset-4">
          <NuxtLink to="/ydelser_Eng">SERVICES</NuxtLink>
        </li>
        <li :class="{ 'active-link': $route.path === '/vi-er_Eng' }" class="hover:underline hover:decoration-[2px] hover:underline-offset-4">
          <a href="/vi-er_Eng">WE ARE</a>
        </li>
        <li :class="{ 'active-link': $route.path === '/faq_Eng' }" class="hover:underline hover:decoration-[2px] hover:underline-offset-4">
          <NuxtLink to="/faq_Eng">FAQ</NuxtLink>
        </li>
        <li :class="{ 'active-link': $route.path === '/kontakt_Eng' }" class="hover:underline hover:decoration-[2px] hover:underline-offset-4">
          <NuxtLink to="/kontakt_Eng">CONTACT</NuxtLink>
        </li>
      <div class="absolute right-28 font-semibold top-10 p-6 cursor-pointer text-[#919995] flex gap-3">
        <NuxtLink to="/index_Eng"><img src="https://i.ibb.co/P1yfgVt/Flag-of-the-United-Kingdom-3-5-svg.webp" class="h-[40px] w-[40px] rounded-[50%] hover:rounded-lg transition-all"></NuxtLink>
          <NuxtLink to="/"><img src="https://i.ibb.co/jZs3yf6/Dansk-flag383594.jpg" class="h-[40px] w-[40px] rounded-[50%] hover:rounded-lg transition-all"></NuxtLink>
           <!-- <NuxtLink to="/"><img src="https://i.ibb.co/bHq9yTg/Svensk-flag693684.jpg" class="h-[40px] w-[40px] rounded-[50%] hover:rounded-lg transition-all"></NuxtLink> -->
    </div>
    </ul>
  </div>
</div>
</section>
</template>

<script >
 export default {
  
};

</script>

<style>

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .menuGapTablet {
    gap:20px;
    margin-left:80px;
}

.menuImgTablet {
  left: 40px;
}
}

body, ul, li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .active-link {
    /* Add your styles for the active link, such as underline or different color */
    text-decoration: underline;
    text-underline-offset: 4px;
    /* Add any other styles you want for the active link */
  }

    @media screen and (max-width: 767px) {
  
  .respons-desktop {
    display: none;
  }
}

@media screen and (max-width: 1500px) {
  
  .kontakt-respons {
    transform: translatex(140px)
  }
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .kontakt-respons {
    transform: translatex(50px)
  }
}

@media only screen and (min-width: 2500px) and (max-width: 3500px) {
  .kontakt-respons {
    transform: translatex(700px)
  }
}


@media screen and (min-width: 768px) {
  
  .respons-mobil {
    display: none;
  }
}

#menuToggle
{
  display: block;
  position: fixed;
  top: 30px; /* Adjusted */
  right: 20px; /* Adjusted */
  z-index: 50;
  
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a
{
  text-decoration: none;
  color: #2c2c2c;
  
  transition: color 0.5s ease;
}

#menuToggle a:hover
{
  color: #256c2b;
}

#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  right: -5px; /* Adjusted to right */
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}

#menuToggle span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  margin-left: 150px;
  position: relative;
  
  background: #cdcdcd;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 100% 0%;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 100% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 100% 100%;
}

#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

#menu
{
  position: absolute;
  width: 300px;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  border-radius: 10px;
  
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  
  transform-origin: 100% 0%;
  transform: translate(100%, 0);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li
{
  padding: 10px 0;
  font-size: 22px;
}

#menuToggle input:checked ~ ul
{
  transform: none;
}
</style>