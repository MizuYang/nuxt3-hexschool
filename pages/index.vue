<script setup>
import RenameMenu from '@/components/global/Menu.vue'
// import AboutHeader from '@/components/About/Header.vue'
// import Test from '@/components/Test.vue'
</script>

<template>
  <div>
    最外層首頁 <br />

    <!-- Auto Import -->
    <Menu />

    <!-- 手動匯入、改名 -->
    <div>
      RenameMenu:
      <RenameMenu />
    </div>

    <Btn />

    <AboutHeader></AboutHeader>

    <Test></Test>
  </div>

</template>

<style lang='scss' scope></style>
