<template>
    <div class="dashboard-layout">
        <navbar></navbar>

        <child/>
    </div>
</template>

<script>
import Navbar from '~/components/page/Navbar'

export default {
    name: 'dashboard-layout',

    components: {
        Navbar
    }
}
</script>
