<template>
    <div class="" @click="viewListing(property.listing_id)">
        <div class="w-64 carousel" v-if="imageurls">
            <div class="carousel-item w-full" v-for="image in imageurls" :key="image.path">
                <img class="rounded-lg" :src="image.signedUrl" alt="Tailwind CSS Carousel component" />
            </div>
        </div>
        <div class="flex flex-col">
            <h1 class="font-semibold">{{ property?.location }}</h1>
            <div class="text-gray-500">
                <p>5,800 km away</p>
                <p>sep 9 - 14</p>
                
            </div>
            <p class="font-semibold">${{ property?.price }} <span class="font-light">night</span></p>
        </div>
    </div>
</template>

<script setup>
const client = useSupabaseClient();

const imageurls = ref([]);

const props = defineProps({
    property: {
        type: Object,
        required: true,
    }
});

onMounted(() => {
    getListingImages(props.property.listing_id)
})

const getListingImages = async (listing_id) => {

    try {
        const { data, error } = await client
            .storage
            .from('shortlets')
            .list(`listings-images/${listing_id}`);

        const imagePaths = data.map(image => image.name);
        console.log(imagePaths)

        const folderPath = `listings-images/${listing_id}`;

        // Generate signed URLs for all images in the array
        const { data: image } = await client
            .storage
            .from('shortlets')
            .createSignedUrls(imagePaths.map(path => `${folderPath}/${path}`), 60);

        console.log(image[0].signedUrl)

        imageurls.value = image;

        console.log(imageurls.value)

    } catch (error) {

        console.log(error)
    }
}

const viewListing = (listing_id) => {
    console.log(listing_id);

    navigateTo(`listing/${listing_id}`)
}
</script>

<style scoped>
.carousel {
    width: 300px;
    /* Set your desired width */
    height: 200px;
    /* Set your desired height */
}
</style>