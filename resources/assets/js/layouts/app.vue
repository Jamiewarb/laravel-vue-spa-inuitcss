<template>
    <div class="app-layout">
        <navbar></navbar>

        <child/>
    </div>
</template>

<script>
import Navbar from '~/components/page/Navbar'

export default {
    name: 'app-layout',

    components: {
        Navbar
    }
}
</script>
