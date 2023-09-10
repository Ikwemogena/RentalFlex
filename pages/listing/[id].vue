<template>
    <div>
        <h1>{{ property[0]?.title }}</h1>

    </div>
</template>

<script setup>
const client = useSupabaseClient();

const { id } = useRoute().params
const property = ref([]);

const displayListing = async(id) => {
    console.log('display', id)
    try {
        let { data: listing, error } = await client
            .from('listing')
            .select('*')
            .eq('listing_id', `${id}`)

            console.log(listing)

            property.value = listing;

            console.log(property)
    } catch (error) {
        console.log(error)

    }
}

displayListing(id);

</script>

<style scoped></style>