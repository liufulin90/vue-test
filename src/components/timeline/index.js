import elTimeline from './timeline.vue'
import elTimelineItem from './timelineItem.vue'

elTimeline.Item = elTimelineItem

elTimeline.install = (Vue) => {
  Vue.component(elTimeline.name, elTimeline)
}

export default elTimeline
