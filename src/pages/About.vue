<template>
  <div class="md-body">
    <h1>В этом приложении:</h1>
    <ul>
      <li>Vue-Router в связке Vue.js 3</li>
      <li>Динамические маршруты</li>
      <li>Установка своих тем поврех своего шаблона vue cli</li>
      <li>Слайдер с растениями</li>
    </ul>
    <p class='my-logo'> {{ myLogo }} </p>
  </div>
</template>

<script>
import { app } from '@/_config';

export default {
    data(){
        return{
            myLogo: app.myLogo
        }
    }
}
</script>
