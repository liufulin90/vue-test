import linTimeline from './timeline.vue'
import linTimelineItem from './timelineItem.vue'

linTimeline.Item = linTimelineItem

linTimeline.install = (Vue) => {
  Vue.component(linTimeline.name, linTimeline)
  Vue.component(linTimelineItem.name, linTimelineItem)
}

export default linTimeline
