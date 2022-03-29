<template>
  <el-form-item label="图片列表：">
    <div v-for="(item, index) in tempValue" :key="index">
      <imageSelect v-model:url="item.url" @change="change" />
      <span class="imageSelect-btn">
        <i class="el-icon-circle-plus-outline"></i>
      </span>
      <span class="imageSelect-btn">
        <i class="el-icon-remove-outline"></i>
      </span>
    </div>
  </el-form-item>
</template>

<script>
import imageSelect from '@/components/image-select'

export default {
  name: 'AttrQkImageSrcList',
  components: {
    imageSelect
  },
  props: {
    imageSrcList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      tempValue: []
    }
  },
  watch: {
    imageSrc() {
      this.initData()
    }
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      let list = []
      this.imageSrcList.forEach(item => {
        list.push({ url: item })
      })
      this.tempValue = list
    },
    getResultImageSrcList() {
      let list = []
      for (let i = 0, len = this.tempValue.length; i < len; i++) {
        list.push(this.tempValue[i].url)
      }
      return list
    },
    change() {
      this.$emit('update:imageSrcList', this.getResultImageSrcList())
    }
  }
}
</script>

<style scoped>

</style>
