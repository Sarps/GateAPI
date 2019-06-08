<template>
    <v-app>
        <v-toolbar app color="primary" flat>
            <v-toolbar-side-icon v-if="$vuetify.breakpoint.smAndDown" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="headline">
                <span>GateAPI</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat>
                <span class="mr-2">Logout</span>
                <v-icon>open_in_new</v-icon>
            </v-btn>
        </v-toolbar>

        <v-content class="white fill-height">
            <router-view/>
        </v-content>

        <NavBar app/>

        <Login />
    </v-app>
</template>

<script>

    import Login from "./components/Login";
    import NavBar from "./components/NavBar"

    export default {
        name: 'App',
        components: {
            Login, NavBar
        },
        data () {
            return {
                drawer: null
            }
        }
    }
</script>

<style>
    *:not(.material-icons) {
        font-family: Quicksand !important;
    }
</style>
