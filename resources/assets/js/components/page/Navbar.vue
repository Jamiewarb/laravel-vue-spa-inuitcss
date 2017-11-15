<template>
    <nav class="navbar navbar--bg-dark">

    </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data: () => ({
        appName: window.config.appName
    }),

    computed: mapGetters({
        user: 'authUser',
        authenticated: 'authCheck'
    }),

    methods: {
        async logout () {
            // Log out the user.
            await this.$store.dispatch('logout')

            // Redirect to login.
            this.$router.push({ name: 'login' })
        }
    }
}
</script>

<style scoped lang="scss">
@import '~global-sass';

.navbar {
    @include font-size(12px);
    padding: 22px 30px;
}
</style>
