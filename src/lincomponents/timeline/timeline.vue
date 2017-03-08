<template>
  <ul class="lin-timeline">
    <slot></slot>
  </ul>
</template>
<script>
  import { defaultProps, oneOfType } from '../utils/'
  import Vue from 'vue'
  import elTimelineItem from './timelineItem.vue'
  export default {
    name: 'lin-timeline',
    data () {
      return {
      }
    },
    mounted () {
      this._mountTimelineItem()
    },
    props: defaultProps({
      prefixCls: 'ant-timeline',
      pending: oneOfType([Boolean, String])
    }),
    methods: {
      _mountTimelineItem () {
        const len = this.$children.length
        this.$children.forEach((child, index) => {
          child.last = index === len - 1
        })

        if (this.pending) {
          const pendingNode = typeof this.pending === 'boolean' ? '' : this.pending

          const _TimelineItem = Vue.extend({
            template: `<lin-timeline-item :pending="true">${pendingNode}</lin-timeline-item>`,
            components: {elTimelineItem}
          })

          new _TimelineItem().$mount().$appendTo(this.$el)
        }
      }
    }
  }
</script>
