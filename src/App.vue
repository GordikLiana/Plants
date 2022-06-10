<template>

  <div class="wrapper">
    <Header/>
    <div class="wapper-container">
      <section>
        <div class="container">
          <div class="vuew-sm isCenter">
            <router-vuew />
          </div>
        </div>
      </section>
    </div>
    <Footer/>
  </div>

</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components:{
    Header,
    Footer
  }
}
</script>


<style>


</style>
