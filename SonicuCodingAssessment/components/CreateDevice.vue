<template>
    <div class="device-form">
        <h2>Create Device Form</h2>
        <div class="device-form-wrapper">
        <form @submit.prevent="submitForm">
            <label for="id">Enter Device Identifier</label>
            <br>
            <input v-model="deviceId" type="text" name="id" placeholder="Enter something" required />
            <br>
            <br>
            <label for="type">Enter Device Type</label>
            <br>
            <input v-model="deviceType" type="text" name="type" placeholder="Enter something" required />
            <br>
            <br>
            <label for="radio">Enter Radio type</label>
            <br>
            <input v-model="radioType" type="text" name="radio" placeholder="Enter something" required />
            <br>
            <br>
            <button type="submit" @click="submit">Submit</button>
        </form>
        <div v-if="responseMessage">{{ responseMessage }}</div>
        </div>
    </div>
</template>

<script>
import Device from '~/models/device';

export default {
  data() {
    return {
      deviceId: '',
      deviceType: '',
      radioType: ''
    };
  },
  methods: {
    async submit() {
        console.log("submission");
        let device = new Device(this.deviceId, this.deviceType, this.radioType);
    }
  }
};
</script>

<style scoped>
/* Add any styles you want here */
    .device-form{
        border: 1px solid black;
    }
    .device-form-wrapper {

        margin-left: 20px;
        margin-bottom: 10px;
    }
    
</style>