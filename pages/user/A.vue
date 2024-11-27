<script setup>
const props = defineProps({
  courses: {
    type: Object,
    required: true,
    default: () => ({})
  }
})

const { courses } = toRefs(props)

</script>

<template>
  <div>
    A <br />
    {{ courses }} <br />

    
  </div>
</template>

<style lang='scss' scope></style>
