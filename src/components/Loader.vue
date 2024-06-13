<script>
export default{
  name:'Loader'
}
</script>

<template>
  
    <div class="d-flex flex-column justify-content-center align-items-center">
        <div><i class="fa-solid fa-spinner"></i></div>
        <span><strong>Loading...</strong></span>
    </div>

</template>

<style scoped lang="scss">
  .fa-solid{
    font-size: 30px;
    @-webkit-keyframes rotating {
    from{
        -webkit-transform: rotate(0deg);
    }
    to{
        -webkit-transform: rotate(360deg);
    }
}
    -webkit-animation: rotating 1.3s linear infinite;

  }
</style>