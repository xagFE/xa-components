<template>
    <div class="xa-ripple-ink" :style="styles"></div>
</template>

<script>
/**
 * Adapted from rippleJS (https://github.com/samthor/rippleJS)
 * removed jQuery
 *
 * Version: 1.0.3
 */
var startRipple = function startRipple (eventType, event) {
  var holder = event.currentTarget || event.target
  if (!holder.classList.contains('xa-ripple-ink')) {
    holder = holder.querySelector('.xa-ripple-ink')
    if (!holder) return
  }
    // Store the event use to generate this ripple on the holder: don't allow
    // further events of different types until we're done. Prevents double-
    // ripples from mousedown/touchstart.
  var prev = holder.getAttribute('data-ui-event')
  if (prev && prev !== eventType) return
  holder.setAttribute('data-ui-event', eventType)
  // Create and position the ripple
  var rect = holder.getBoundingClientRect()
  var x = event.offsetX
  var y
  if (x !== undefined) {
    y = event.offsetY
  } else {
    x = event.clientX - rect.left
    y = event.clientY - rect.top
  }
  var ripple = document.createElement('div')
  var max
  if (rect.width === rect.height) {
    max = rect.width * 1.412
  } else {
    max = Math.sqrt(
      (rect.width * rect.width) + (rect.height * rect.height)
    )
  }
  var dim = (max * 2) + 'px'
  ripple.style.width = dim
  ripple.style.height = dim
  ripple.style.marginLeft = -max + x + 'px'
  ripple.style.marginTop = -max + y + 'px'
  // Activate/add the element
  ripple.className = 'ripple'
  holder.appendChild(ripple)
  setTimeout(function () {
    ripple.classList.add('held')
  }, 0)
  var releaseEvents = eventType === 'mousedown' ? ['mouseup', 'mousemove'] : ['touchend', 'touchmove', 'touchcancel']
  var release = function () {
    releaseEvents.forEach((releaseEvent) => {
      document.removeEventListener(releaseEvent, release)
    })
    ripple.classList.add('done')
    // Larger than the animation duration in CSS
    setTimeout(function () {
      holder.removeChild(ripple)
      if (!holder.children.length) {
        holder.classList.remove('active')
        holder.removeAttribute('data-ui-event')
      }
    }, 900)
  }
  releaseEvents.forEach((releaseEvent) => {
    document.addEventListener(releaseEvent, release)
  })
}

var handleMouseDown = function handleMouseDown (e) {
  // $el.parentNode on left click only
  if (e.button === 0) {
    startRipple(e.type, e)
  }
}
var handleTouchStart = function handleTouchStart (e) {
  if (e.changedTouches) {
    for (var i = 0; i < e.changedTouches.length; ++i) {
      startRipple(e.type, e.changedTouches[i])
    }
  }
}

export default {
  name: 'ripple',
  computed: {
    styles () {
      return Object.assign({color: this.color}, this.type === 'circle' ? {'border-radius': '50%', 'margin': '5px'} : {})
    }
  },
  props: {
    color: {
      type: String,
      default: 'rgba(0,0,0,0.1)'
    },
    type: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initialize()
    })
  },
  beforeDestory () {
    if (this.$el.parentNode) {
      this.$el.parentNode.removeEventListener('mousedown', handleMouseDown)
      this.$el.parentNode.removeEventListener('touchstart', handleTouchStart)
    }
  },
  methods: {
    initialize () {
      if (this.$el.parentNode) {
        this.$el.parentNode.addEventListener('touchstart', handleTouchStart)
        this.$el.parentNode.addEventListener('mousedown', handleMouseDown)
      }
    }
  }
}
</script>

<style lang="scss">
.xa-ripple-ink {
    display: block;
    overflow: hidden;
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // Forces webkit to properly contain content within border-radius
    -webkit-mask-image: -webkit-radial-gradient(circle, white, black);
}
.xa-ripple-ink .ripple {
    position: absolute;
    width: 0;
    height: 0;
    pointer-events: none;
    user-select: none;
    border-radius: 50%;
    background-color: currentColor;
    background-clip: padding-box;
    // opacity: 0.2;
    transform: scale(0);
    transition: transform 0.8s ease-out, opacity 0.8s ease-out;
    &.held {
        // opacity: 0.4;
        transform: scale(1);
    }
    &.done {
        opacity: 0!important;
    }
}
</style>
