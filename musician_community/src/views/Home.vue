<template>
  <v-card class="overflow-hidden">
    <Appbar />

    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="1000"
    >
      <v-parallax
        height="1000"
        src="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />

        <v-container style="height: 800px;">
          <v-card class="mx-auto">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-3">I want to find..</div>
                <v-list-item-title class="headline mb-1"
                  >Connect With Local Musicians Who Have</v-list-item-title
                >
                <v-list-item-title class="headline mb-1"
                  >Similar Tastes With You!</v-list-item-title
                >
              </v-list-item-content>

              <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
            </v-list-item>
            <!-- <v-card-actions> -->
            <router-link :to="{ name: 'login' }">
              <v-btn id="findevents">
                <a id="buttontext">Join the Community</a>
              </v-btn>
            </router-link>

            <!-- </v-card-actions> -->
          </v-card>
        </v-container>

        <Footer />
      </v-parallax>
    </v-sheet>
  </v-card>
</template>
<script>
import Appbar from "../components/Appbar";
import Footer from "../components/footer";
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  components: {
    Appbar,
    Footer
  }
};
</script>
<style scoped>
#buttontext {
  color: black;
}
</style>
