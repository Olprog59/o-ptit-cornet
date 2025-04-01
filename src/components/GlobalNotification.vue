<script setup lang="ts">
import { useNotificationStore } from '../stores/notificationStore'

const notificationStore = useNotificationStore()
</script>

<template>
  <div class="notifications-container">
    <transition name="fade">
      <div v-if="notificationStore.error" class="notification error">
        <div class="content">
          <span class="icon">⚠️</span>
          <p>{{ notificationStore.error }}</p>
        </div>
        <button @click="notificationStore.error = null" class="close-btn">×</button>
      </div>
    </transition>

    <transition name="fade">
      <div v-if="notificationStore.success" class="notification success">
        <div class="content">
          <span class="icon">✅</span>
          <p>{{ notificationStore.success }}</p>
        </div>
        <button @click="notificationStore.success = null" class="close-btn">×</button>
      </div>
    </transition>

    <transition name="fade">
      <div v-if="notificationStore.info" class="notification info">
        <div class="content">
          <span class="icon">ℹ️</span>
          <p>{{ notificationStore.info }}</p>
        </div>
        <button @click="notificationStore.info = null" class="close-btn">×</button>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.notifications-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  width: 320px;
}

.notification {
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.content {
  display: flex;
  align-items: flex-start;
}

.icon {
  margin-right: 10px;
  font-size: 20px;
}

.error {
  background-color: #fdecea;
  border-left: 4px solid #f44336;
}

.success {
  background-color: #e8f5e9;
  border-left: 4px solid #4caf50;
}

.info {
  background-color: #e3f2fd;
  border-left: 4px solid #2196f3;
}

.close-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.5;
}

.close-btn:hover {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
