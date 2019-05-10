<template>  
    <footer class="main-footer d-flex p-2 px-3 bg-white border-top">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Why Blueform</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Support</a>
        </li>
      </ul>
      <span class="copyright ml-auto my-auto mr-2">Copyright © <span id="year">2019</span>
        <a href="!#" rel="nofollow">QAPP</a>
      </span>
    </footer>
</template>
<script>
export default {
  mounted(){
    document.getElementById('year').innerHTML = new Date().getFullYear();
  }
}
</script>
