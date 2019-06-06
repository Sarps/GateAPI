<template>
    <v-container>
        <v-layout
                text-xs-center
                wrap
        >
            <v-flex xs12>
                <v-img
                        :src="require('../assets/logo.png')"
                        class="my-3"
                        contain
                        height="200"
                ></v-img>
            </v-flex>

            <v-flex mb-4>
                <h1 class="display-2 font-weight-bold mb-3">
                    Welcome to GateAPI
                </h1>
                <p class="subheading font-weight-regular">
                    You currently have no app behind the gate
                    <br>
                    <v-btn color="success">Add an app</v-btn>
                </p>
            </v-flex>

            <v-flex
                    mb-5
                    xs12
            >
                <h2 class="headline font-weight-bold mb-3">What's next?</h2>

                <v-layout justify-center>
                    <a
                            :href="next.href"
                            :key="i"
                            class="subheading mx-3"
                            target="_blank"
                            v-for="(next, i) in whatsNext"
                    >
                        {{ next.text }}
                    </a>
                </v-layout>
            </v-flex>

            <v-flex
                    mb-5
                    xs12
            >
                <h2 class="headline font-weight-bold mb-3">Important Links</h2>

                <v-layout justify-center>
                    <a
                            :href="link.href"
                            :key="i"
                            class="subheading mx-3"
                            target="_blank"
                            v-for="(link, i) in importantLinks"
                    >
                        {{ link.text }}
                    </a>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            ecosystem: [
                {
                    text: 'vuetify-loader',
                    href: 'https://github.com/vuetifyjs/vuetify-loader'
                },
                {
                    text: 'github',
                    href: 'https://github.com/vuetifyjs/vuetify'
                },
                {
                    text: 'awesome-vuetify',
                    href: 'https://github.com/vuetifyjs/awesome-vuetify'
                }
            ],
            importantLinks: [
                {
                    text: 'GateAPI API Documentation',
                    href: 'https://vuetifyjs.com'
                },
                {
                    text: 'OAuth2.0 Tutorial',
                    href: 'https://community.vuetifyjs.com'
                },
                {
                    text: 'Made with GateAPI',
                    href: 'https://madewithvuetifyjs.com'
                },
                {
                    text: 'Stack Overflow',
                    href: 'https://medium.com/vuetify'
                }
            ],
            whatsNext: [
                {
                    text: 'Add An App',
                    href: 'https://vuetifyjs.com/components/api-explorer'
                },
                {
                    text: 'Getting Started with GateAPI',
                    href: 'https://vuetifyjs.com/layout/pre-defined'
                },
                {
                    text: 'Frequently Asked Questions',
                    href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
                }

            ]
        })
    }
</script>

<style>

</style>
