<template>
  <div class="notifications">
    <TransitionGroup 
      name="list"
      tag="div"
    >
      <div
        class="notification is-light"
        :class="context[notification.type]"
        v-for="notification in notifications"
        :key="notification.id"
      >
        {{notification.text}}
      </div>
    </TransitionGroup>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { NotificationType} from '@/interfaces/INotification'
import { useStore } from '@/store';

export default defineComponent({
  name: "atNotification",
  data () {
    return {
      context: {
        [NotificationType.SUCCESS]: 'is-success',
        [NotificationType.WARNING]: 'is-warning',
        [NotificationType.FAIL]: 'is-danger',
      }
    }
  },
  setup() {
    const store = useStore();
    return {
      notifications: computed(() => store.state.notifications),
    };
  },
})
</script>

<style scoped>
.notifications {
  position: absolute;
  right: 0;
  width: 300px;
  padding: 8px;
  z-index: 105;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>