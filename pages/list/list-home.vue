<template>
    <div class="form-page h-screen">
        <div class="flex flex-col justify-center items-center">
            <form class="">
                <progress class="progress w-56" value="10" max="100"></progress>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">What is your name?</span>
                        <span class="label-text-alt">Top Right label</span>
                    </label>
                    <label class="input-group">
                        <span>Email</span>
                        <input type="text" placeholder="info@site.com" class="input input-bordered" />
                    </label>
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">What is your name?</span>
                        <span class="label-text-alt">Top Right label</span>
                    </label>
                    <label class="input-group">
                        <span>Email</span>
                        <input type="text" placeholder="info@site.com" class="input input-bordered" />
                    </label>
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Enter pricing per night</span>
                    </label>
                    <label class="input-group">
                        <span>Price</span>
                        <input type="text" placeholder="10" class="input input-bordered" />
                        <span>NGN</span>
                    </label>
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Upload Pictures</span>
                        <span class="label-text-alt">Alt label</span>
                    </label>
                    <input type="file" class="file-input file-input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text-alt">Alt label</span>
                        <span class="label-text-alt">Alt label</span>
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Pick listing category</span>
                        <span class="label-text-alt">Alt label</span>
                    </label>
                    <select class="select select-bordered">
                        <option disabled selected>Pick one</option>
                        <option>Star Wars</option>
                        <option>Harry Potter</option>
                        <option>Lord of the Rings</option>
                        <option>Planet of the Apes</option>
                        <option>Star Trek</option>
                    </select>
                    <label class="label">
                        <span class="label-text-alt">Alt label</span>
                        <span class="label-text-alt">Alt label</span>
                    </label>
                </div>


                <button type="submit" class="btn">Register Listing</button>
            </form>
        </div>


    </div>
</template>

<script setup>

</script>

<style scoped>
.form-page {
    color: white;
}
</style>