<template>
  <section class="fixed top-0 z-50 w-screen respons-desktop">
  <header class="relative h-fit sm:max-w-full max-w-[40px] z-50">
    <nav class="relative flex justify-center items-center border-[#256c2b] border-b-4 max-h-[200px]">
      <ul class="flex gap-8 absolute sm:p-6 font-semibold z-50 translate-y-6 mr-20">
        <li :class="{ 'active-link': $route.path === '/' }" class="hover:underline hover:decoration-[2px] hover:underline-offset-4">
          <NuxtLink to="/">HJEM</NuxtLink>
        </li>
        <li :class="{ 'active-link': $route.path === '/samarbejde' }" class="hover:underline hover:decoration-[2px] hover:underline-offset-4">
          <NuxtLink to="/samarbejde">SAMARBEJDE</NuxtLink>
        </li>
        <li :class="{ 'active-link': $route.path === '/ydelser' }" class="hover:underline hover:decoration-[2px] hover:underline-offset-4">
          <NuxtLink to="/ydelser">YDELSER</NuxtLink>
        </li>
        <li :class="{ 'active-link': $route.path === '/vi-er' }" class="hover:underline hover:decoration-[2px] hover:underline-offset-4">
          <NuxtLink to="/vi-er">VI ER</NuxtLink>
        </li>
        <li :class="{ 'active-link': $route.path === '/faq' }" class="hover:underline hover:decoration-[2px] decoration-black hover:underline-offset-4">
          <NuxtLink to="/faq">FAQ</NuxtLink>
        </li>
        <li class="translate-x-40 hover:scale-110 transition-all cursor-pointer bg-[#256c2b] text-white px-4 rounded-md">
          <NuxtLink to="/kontakt">KONTAKT</NuxtLink>
        </li>
      </ul>
      <NuxtLink to="/"><img src="https://i.ibb.co/ZWCZJRk/IKR-Main-Logo-600x450-cropped.jpg" class="absolute left-16 h-[90px] w-fit top-3" alt="#"></NuxtLink>
      <p class="absolute right-16 font-semibold top-3 p-6 cursor-pointer text-[#919995]">Dansk</p>
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
      <NuxtLink href="/"><li>Hjem</li></NuxtLink>
      <NuxtLink href="samarbejde"><li>Samarbejde</li></NuxtLink>
      <NuxtLink href="ydelser"><li>Ydelser</li></NuxtLink>
      <NuxtLink href="vi-er"><li>Vi er</li></NuxtLink>
      <NuxtLink href="faq"><li>FAQ</li></NuxtLink>
      <NuxtLink href="kontakt"><li>Kontakt</li></NuxtLink>
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

@media screen and (min-width: 768px) {
  
  .respons-mobil {
    display: none;
  }
}

#menuToggle
{
  display: block;
  position: fixed;
  top: 20px; /* Adjusted */
  right: 20px; /* Adjusted */
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a
{
  text-decoration: none;
  color: #2c2c2c;
  
  transition: color 0.3s ease;
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