<template>
    <header>
        <div class="navbar">
            <div class="navbar__wrapper">
                <div class="navbar__logo">
                    <img class="navbar__img" src="@/assets/logo.png" alt="">
                    <router-link class="navbar__title" to="/"> {{ title }} </router-link>
                </div>
                <ul class="navbar__list">
                    <li class="navbar__item" v-for="link in links" :key="link.alias">
                        <router-link class="navbar-link" :to="link.url"> {{ link.title }} </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import { app, links } from '@/_config';

export default {
    data(){
        return{
            title: app.title,
            links: links
        }
    }
}
</script>
