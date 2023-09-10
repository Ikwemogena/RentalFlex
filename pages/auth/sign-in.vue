<template>
    <div>
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Login now!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                        exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form class="card-body" @submit.prevent="submitForm">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" v-model="email" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" class="input input-bordered" v-model="password" />
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button type="submit" class="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const email = ref('');
const password = ref('');


const client = useSupabaseClient();

const submitForm = async () => {
    // Log the email and password when the form is submitted
    console.log('Email:', email.value);
    console.log('Password:', password.value);

    let { data, error } = await client.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })

    console.log(data)

    // const { user, session } = supabase.auth;

    // https://[project_ref].supabase.co/storage/v1/object/public/[id]
};



// async function fetchAndInsertUsers() {
//     try {
//         // Fetch authentication users from the 'auth' table
//         const { data: authUsers, error } = await supabase.auth.api.listUsers();

//         if (error) {
//             throw error;
//         }

//         // Insert the fetched users into your custom 'users' table
//         const { data: insertedUsers, error: insertError } = await supabase
//             .from('your_custom_users_table')
//             .upsert(authUsers, { onConflict: ['id'] });

//         if (insertError) {
//             throw insertError;
//         }

//         console.log('Successfully fetched and inserted users:', insertedUsers);
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// }

// Call the function to fetch and insert users
// fetchAndInsertUsers();
</script>

<style scoped></style>