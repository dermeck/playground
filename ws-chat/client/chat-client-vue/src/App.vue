<script setup>
import {io} from 'socket.io-client';
import { onBeforeMount, ref } from 'vue';

const socket = io('http://localhost:3001');

const messages = ref([]);

onBeforeMount(() => {
  socket.emit('findAllMessages', {}, response => {
    messages.value = response;
  })
})

</script>

<template>
  <div class="chat">
    <div class="chat-container">
      <div class="message-container">
        <div v-for="message in messages">
          [{{ message.userName }}]: {{ message.content }}
        </div>
      </div>
    </div>

  </div>

</template>

<style scoped></style>
