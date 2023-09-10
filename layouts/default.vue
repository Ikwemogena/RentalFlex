<template>
    <div class="h-screen">
        <!-- px-10 -->

        <header class="border-b p-4 mb-4">
            <nav class="flex justify-between items-center">
                <div class="logo">
                    <!-- <img src="logo.png" alt="Airbnb Logo"> -->
                    <h1 class="font-bold text-3xl">Lister</h1>
                </div>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink> </li>
                    <li><a href="#">Explore</a></li>
                    <li><a href="#">Host</a></li>
                    <li><a href="#">My Trips</a></li>
                    <li><a href="#">Login</a></li>
                    <li><NuxtLink to="/list/home">List Your Home</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <slot />

    </div>
</template>

<script setup>

</script>

<style scoped>
/* styles.css */

/* header {
    background-color: #FF5A5F;
    padding: 10px 0;
} */

/* nav {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
} */

/* .logo img {
    height: 40px;
} */

/* ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

li {
    font-size: 16px;
}

a {
    text-decoration: none;
    color: #333;
}

a:hover {
    color: #FF5A5F;
} */
</style>