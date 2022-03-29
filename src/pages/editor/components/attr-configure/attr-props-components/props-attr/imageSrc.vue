<template>
  <el-form-item label="图片：">
    <imageSelect v-model:url="tempValue" />
  </el-form-item>
</template>

<script>
import imageSelect from '@/components/image-select'
export default {
  name: 'AttrQkImageSrc',
  components: {
    imageSelect
  },
  props: {
    imageSrc: String
  },
  data() {
    return {
      tempValue: ''
    }
  },
  watch: {
    imageSrc(val) {
      this.tempValue = val
    },
    tempValue() {
      this.$emit('update:imageSrc', this.tempValue)
    }
  },
  mounted() {
    this.tempValue = this.imageSrc
  }
}
</script>

<style scoped>

</style>
