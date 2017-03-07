<template>
  <ul :class="'lin-timeline'">
    <slot></slot>
  </ul>
</template>
<script>
  import Vue from 'vue'
  import elTimelineItem from './timelineItem.vue'

  export default {
    name: 'el-timeline',
    data () {
      return {
        msg: 'dasdf'
      }
    },
//    ready () {
//      this._mountTimelineItem()
//    },

    mounted () {
      this._mountTimelineItem()
    },
    props: {
      icon: {
        type: String,
        default: ''
      }
    },
    methods: {
      _mountTimelineItem () {
        const len = this.$children.length
        this.$children.forEach((child, index) => {
          child.last = index === len - 1
        })

//        this.$slots.default = this.$slots.default.filter(function (child) {
//          console.log(child.tag)
//          return child.tag === 'el-timeline-item'
//        })
//        const _TimelineItem = Vue.extend({
//          template: `<el-timeline-item></el-timeline-item>`,
//          components: {elTimelineItem}
//        })
//        console.log(this.$children, this.$slots)
//
//        this.$el.appendChild(new _TimelineItem().$mount().$el)
        this.$slots.default.forEach((child) => {
          if (child.tag === 'el-timeline-item') {
            const _TimelineItem = Vue.extend({
              template: `<el-timeline-item></el-timeline-item>`,
              components: {elTimelineItem}
            })
            console.log(this.$children, this.$slots)
            this.$el.appendChild(new _TimelineItem().$mount().$el)
          }
        })
        console.log(88888)
//        const _TimelineItem = Vue.extend({
//          template: `<v-timeline-item :pending="true">${pendingNode}</v-timeline-item>`,
//          components: {vTimelineItem}
//        })
//        new _TimelineItem().$mount().$appendTo(this.$el);
      }
    }
  }
</script>
<style>

  .lin-timeline {
    width: 100%;
  }

  .lin-timeline li i {
    padding: 0 5px;
  }

  .lin-timeline li > i:before {
    content: " ";
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 50%;
    border: 2px solid #00a2ae;
  }
</style>
