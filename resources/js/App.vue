<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" permanent app>
            <v-list-item
                prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
                title="John Leider"
            ></v-list-item>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <v-list-item
                    prepend-icon="mdi-view-dashboard"
                    title="Home"
                    value="home"
                    :to="{name:'home'}"
                ></v-list-item>
                <v-list-item
                    prepend-icon="mdi-forum"
                    title="About"
                    value="about"
                    :to="{name:'test'}"
                ></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-app-bar-title>Application</v-app-bar-title>
        </v-app-bar>

        <v-main>
            <!--  -->
            <router-view></router-view>
        </v-main>
    </v-app>
</template>
<script>
export default {
    data: () => ({ drawer: null }),
};
</script>
