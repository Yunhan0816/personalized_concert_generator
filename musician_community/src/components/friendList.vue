<template>
  <v-card>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>John</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Mary</v-list-item-title>
        <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>Emma</v-list-item-title>
        <v-list-item-subtitle>Secondary line text Lorem ipsum dolor sit amet,</v-list-item-subtitle>
        <v-list-item-subtitle>consectetur adipiscing elit.</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>
<script>
export default {
  name: "EventList"
};
</script>
