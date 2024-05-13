<template>
  <div>
    <div @click="sendNotification">TEST</div>
    AAAAA
    <h1>Geolocation</h1>
    <p>Your location is:</p>
    <p>Latitude: {{ loc.lat }}</p>
    <p>Longitude: {{ loc.long }}</p>

    <button @click="getCurrentPosition">Get Current Location</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Geolocation } from "@capacitor/geolocation";
import { LocalNotifications } from "@capacitor/local-notifications";
export default defineComponent({
  setup() {
    const loc = ref<{
      lat: null | number;
      long: null | number;
    }>({
      lat: null,
      long: null,
    });

    const sendNotification = async () => {
      let options = {
        notifications: [
          {
            id: 1,
            title: "Test",
            body: "Explore",
            largeBody: "Get 30%",
            summaryText: "Exciting offer",
          },
        ],
      };
      try {
        await LocalNotifications.schedule(options);
      } catch (e) {
        alert(JSON.stringify(e));
      }
    };

    const getCurrentPosition = async () => {
      const pos = await Geolocation.getCurrentPosition();
      loc.value = {
        lat: pos.coords.latitude,
        long: pos.coords.longitude,
      };
    };
    return { getCurrentPosition, sendNotification, loc };
  },
});
</script>
