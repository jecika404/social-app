<template>
    <div class="welcome">
        <v-carousel
            height="100vh"
            hide-delimiter-background
            show-arrows-on-hover
            cycle 
            interval="5000">
            <v-carousel-item
                v-for="(img,i) in imgs"
                :key="i"
                :src="img.src"
            >
            <Navbar />
            </v-carousel-item>  
        </v-carousel>
    </div>
</template>

<script>
import Navbar from '../layout/Navbar';

export default {
    name: 'Welcome',
    components: {
      Navbar,
      
    },
    data() {
        return {

            imgs: [
                {src: require('@/assets/img/img.jpg')},
                {src: require('@/assets/img/img2.jpg')},
                {src: require('@/assets/img/img3.jpg')},
                {src: require('@/assets/img/img4.jpg')}             
            ],
        }
    }
}
</script>