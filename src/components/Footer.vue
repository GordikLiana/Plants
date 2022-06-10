<template>
    <footer>
        <div class="navbar navbar--footer">
            <div class="navbar__wrapper navbar__wrapper--footer">
                <ul class="navbar__list">
                    <li class="navbar__item" v-for="link in links" :key="link.alias">
                        <router-link :to="link.item"> {{ link.title }} </router-link>
                    </li>
                </ul>
                <p class='my-logo'> {{ myLogo }} </p>
            </div>
        </div>
    </footer>
</template>

<script>
import { app, links } from '@/_config';

export default {
    data(){
        return{
            title: app.title,
            links: links,
            myLogo: app.myLogo
        }
    }
}
</script>
