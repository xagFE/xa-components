<template>
  <div>
    <div class="form-title">基本信息</div>
    <xa-cells>
      <xa-input label="姓名" right required v-model="name" type="text" placeholder="请输入姓名" />
      <xa-input label="年龄" right required v-model.number="age" type="number" placeholder="请输入年龄" />
      <xa-input label="其它" right type="text" placeholder="请输入其它信息" />
      <xa-cell right arrow>
        <div class="xa-input-label" slot="title">选择时间</div>
        <xa-date-picker v-model="time" title="选择个时间吧"></xa-date-picker>
      </xa-cell>
      <xa-cell right arrow>
        <div class="xa-input-label" slot="title">select</div>
        <xa-select rtl v-model="selectValue" :items="selectItems"></xa-select>
      </xa-cell>
    </xa-cells>
    <div class="form-title">左边的</div>
    <xa-cells>
      <xa-input label="姓名" required type="text" placeholder="请输入姓名" />
      <xa-input label="年龄" required type="number" placeholder="请输入年龄" />
      <xa-input label="其它" type="text" placeholder="请输入其它信息" />
      <xa-cell arrow>
        <div class="xa-input-label" slot="title">选择时间</div>
        <xa-date-picker v-model="time1" title="选择个时间吧"></xa-date-picker>
      </xa-cell>
      <xa-cell right arrow>
        <div class="xa-input-label" slot="title">select</div>
        <xa-select v-model="selectValue" :items="selectItems"></xa-select>
      </xa-cell>
    </xa-cells>
    <xa-input label="姓名" position="top" required type="text" placeholder="请输入姓名" />
    <xa-input label="年龄" position="top" required type="text" placeholder="请输入年龄" />
    <xa-input label="其它" position="top" type="text" placeholder="请输入其它信息" />
    <div class="form-title">备注</div>
    <xa-cells>
      <xa-cell>
        <textarea class="xa-textarea" rows="3" placeholder="请输入备注内容"></textarea>
      </xa-cell>
    </xa-cells>
    <xa-button @on-click="onSubmit" style="width:100%;" class="xa-bg-green" ripple="rgba(255,255,255,0.3)">提交</xa-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      age: 20,
      time: '',
      time1: '',
      selectValue: 2,
      selectItems: [
        {text: '选项一', value: 1},
        {text: '选项二', value: 2},
        {text: '选项三', value: 3}
      ]
    }
  },
  methods: {
    onSubmit () {
      console.log('提交')
    }
  }
}
</script>

