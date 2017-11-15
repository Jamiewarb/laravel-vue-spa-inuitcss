<template>
    <div class="c-card">
        <div v-if="title" class="c-card__header">
            {{ title }}
        </div>

        <div class="c-card__body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card',

    props: ['title']
}
</script>
