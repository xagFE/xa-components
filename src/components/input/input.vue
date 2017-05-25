<template>
  <cell v-if="position === 'left'" :required="required">
    <div v-if="label" class="xa-input-label" slot="title">{{label}}</div>
    <input slot="desc" :type="type" :value="value" :placeholder="placeholder" @input="onInput" class="xa-input" :class="{'xa-txt-right': right}">
  </cell>
  <div v-else>
    <div class="form-title" :class="{'required': required}" >{{ label }}</div>
    <cells>
      <cell>
        <input slot="desc" :type="type" :value="value" :placeholder="placeholder" @input="onInput" class="xa-input">
      </cell>
    </cells>
  </div>
</template>
<script>
import {cells, cell} from '../cells'
export default {
  components: {cells, cell},
  props: {
    position: {
      type: String,
      default: 'left'
    },
    label: String,
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    required: Boolean,
    right: Boolean,
    disabled: Boolean,
    readonly: Boolean
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

