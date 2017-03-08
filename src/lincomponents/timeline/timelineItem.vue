<template>
  <li :class="itemClassName">
    <div :class="prefixCls + '-item-tail'"></div>
    <i :class="doClassName" :style="{ borderColor: 'blue|red|green'.indexOf(color) > -1 ? null : color }"></i>
    <div class="lin-timeline-item-content">
      <slot></slot>
    </div>
  </li>
</template>
<script>
  import { defaultProps } from '../utils/'
  export default {
    name: 'lin-timeline-item',
    props: defaultProps({
      prefixCls: 'lin-timeline',
      color: 'blue',
      last: false,
      pending: Boolean
    }),
    computed: {
      itemClassName () {
        return [
          `${this.prefixCls}-item`,
          {[`${this.prefixCls}-item-last`]: this.last},
          {[`${this.prefixCls}-item-pending`]: this.pending}
        ]
      },
      doClassName () {
        return [
          `${this.prefixCls}-item-i`
        ]
      }
    },
    methods: {
      compile (elem) {
        if (elem) {
          return elem
        }
      }
    }
  }
</script>
<style>

  .lin-timeline,
  .lin-timeline .lin-timeline-item {
    list-style: none;
    text-align: left;
  }

  .lin-timeline {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .lin-timeline .lin-timeline-item{
    position: relative;
    padding: 0px 0px 20px;
    margin-left: 15px;
  }
  .lin-timeline .lin-timeline-item:last-child{
  }
  .lin-timeline .lin-timeline-item > .lin-timeline-item-i{
    display: inline-block;
    position: absolute;
    left: 0;
    background: #ffffff;
  }

  .lin-timeline .lin-timeline-item > .lin-timeline-item-i {
    position: absolute;
    content: " ";
    width: 10px;
    height: 10px;
    display: inline-block;
    border-radius: 50%;
    border: 2px solid #00a2ae;
    background-color: #ffffff;
  }
  .lin-timeline-item-tail {
    position: absolute;
    left: 6px;
    top: 0px;
    height: 100%;
    border-left: 2px solid #E9E9E9;
  }
  .lin-timeline-item-last .lin-timeline-item-tail{
    display: none;
  }
  .lin-timeline-item-pending .lin-timeline-item-tail{
    display: inline-block;
    border-left: 2px dashed #E9E9E9;
  }
  .lin-timeline-item-content{
    padding: 0px 0px 10px 24px;
    position: relative;
    top: -3px;
  }
</style>
