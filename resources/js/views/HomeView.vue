<template>
    <v-container fluid>
        <v-card> Home </v-card>
    </v-container>
</template>

<script>
import UserApi from "../apis/User";
export default {
    data() {
        return {
            users: [],
            isLoading: false
        }
    },
    created() {
        this.fetchUser()
    },
    methods: {
        fetchUser() {
            this.isLoading = true
            UserApi.getUsers({})
                .then((response) => {
                    this.users = response.data
                })
                .catch((err) => {
                    console.error(err)
                })
                .finally(() => {
                    this.isloading = false
                });
        },
    },
};
</script>
