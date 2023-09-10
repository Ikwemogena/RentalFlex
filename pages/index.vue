<template>
    <div>
        <div class="grid md:grid-cols-3 lg:grid-cols-5 px-7 gap-2">
            <div v-for="listing in allProperties" :key="listing.listing_id">
                <HomeCardComponent :property="listing" />
            </div>
        </div>
        <span class="loading loading-ring loading-lg"></span>

        <div class="flex items-center space-x-4">
            <Skeleton class="h-12 w-12 rounded-full" />
            <div class="space-y-2">
                <Skeleton class="h-4 w-[250px]" />
                <Skeleton class="h-4 w-[200px]" />
            </div>
        </div>
    </div>
</template>

<script setup>
// import { Skeleton } from '@/lib/registry/default/ui/skeleton'
const allProperties = ref([]);

const client = useSupabaseClient();
const router = useRouter();

onMounted(() => {
    getAllHomes();
})

const getAllHomes = async () => {
    try {

        let { data: listing, error } = await client
            .from('listing')
            .select('*')

        console.log(listing)
        allProperties.value = listing
    } catch (error) {
        console.error('Error creating task:', error);

    }
}



</script>

<style lang="scss" scoped></style>