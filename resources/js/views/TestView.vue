<template>
    <v-container fluid>
        TEST
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
        this.fetchCurrent()
    },
    methods: {
        fetchCurrent() {
            this.isLoading = true
            UserApi.getCurrentUser({})
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
}
</script>
