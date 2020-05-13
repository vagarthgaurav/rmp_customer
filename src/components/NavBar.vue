<template>
    <div class="navbar" v-if="isLoggedIn">
        <v-app-bar color="primary" dark app flat v-if="isLoggedIn">
            <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer" v-if="isLoggedIn"></v-app-bar-nav-icon>

            <v-toolbar-title class="title">Recup Mes Points - {{$t('dashboard')}}</v-toolbar-title>

            <v-row class="mt-7">
                <v-col cols="12" sm="3"></v-col>
                <v-col cols="12" sm="3">
                    <v-select
                            v-model="language"
                            :items="languages"
                            dense
                            :label="$t('language')"
                            outlined
                            item-text="lang"
                            item-value="abbr"
                            @change="languageChange"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="3"></v-col>

                <v-col cols="12" sm="3">
                    <v-btn @click="logout" outlined>{{$t('logout')}}</v-btn>
                </v-col>
            </v-row>
        </v-app-bar>

        <v-navigation-drawer
                v-if="isLoggedIn"
                app
                v-model="drawer"
                color="secondary"
                :mini-variant.sync="mini"
        >
            <v-list-item>
                <v-list-item-avatar>
                    <v-icon>mdi-account</v-icon>
                </v-list-item-avatar>

                <v-list-item-title>{{user.firstname}} {{user.lastname}}</v-list-item-title>

                <v-btn icon @click.stop="mini = !mini">
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>
                <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{$t( 'navbar.' + item.title )}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                drawer: null,
                mini: true,
                languages: [
                    {lang: "English", abbr: "en"},
                    {lang: "Français", abbr: "fr"}
                ],
                language: "fr",
                items: [
                    {
                        title: 'profile',
                        icon: "mdi-clipboard-account-outline",
                        to: "/profile"
                    },
                    {title: 'courses', icon: "mdi-view-dashboard-outline", to: "/"}
                ]
            };
        },
        created() {
        },
        methods: {
            logout() {
                this.$store.commit("signout");
                window.location.href = "/login";
            },
            languageChange(lang) {
                this.$i18n.locale = lang;
                this.$forceUpdate();
            }
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters.isLoggedIn;
            },

            user() {
                return this.$store.getters.getUser;
            }
        }
    };
</script>
