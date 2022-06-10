<template>
  <div class="wrapper-plant">
    <div>
        <img :src="item.img" :alt="item.alias">
        <h2 class="title"> {{ item.title }} </h2>
        <p> {{ item.descr }} </p>
    </div>
  </div>
</template>

<script>
import items from "@/seeders/item.js"

export default {
    data(){
        return{
            item: null
        }
    },
    created() {
        const alias = this.$route.params.itemAlias
        const item = items.find(el => el.alias === alias)

        this.item = item
        console.log(item)
    }
}
</script>

<style>

</style>