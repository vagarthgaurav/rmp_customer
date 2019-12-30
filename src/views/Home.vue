<template>
  <div class="home">
    <v-container class="mt-12">
      <v-card class="mx-auto" width="95%">
        <v-card-title>
          Courses
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-account-search-outline"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>

        <v-data-table
          :search="search"
          :headers="headers"
          :items="allCourses"
          class="elevation-1"
          @click:row="rowSelect"
        >
          <template v-slot:item.trainingCenterLocation="{ item }">
            {{ item.trainingCenterLocation.city.cityName }}, {{item.trainingCenterLocation.address}}
            <br />
            <span style="font-style: italic">{{item.trainingCenterLocation.city.pinCode}}</span>
          </template>

          <template v-slot:item.startingDate="{ item }">{{ formatDate(item.startingDate) }}</template>

          <template v-slot:item.endingDate="{ item }">{{ formatDate(item.endingDate) }}</template>

          <template v-slot:item.startingTime="{ item }">{{ formatTime(item.startingDate) }}</template>

          <template v-slot:item.endingTime="{ item }">{{ formatTime(item.endingDate) }}</template>

          <template v-slot:item.price="{ item }">€ {{ item.price }}</template>
        </v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",

      allCourses: [],

      headers: [
        { text: "Location", value: "trainingCenterLocation" },
        { text: "Dates", value: "startingDate" },
        { text: "End date", value: "endingDate" },
        { text: "Start Time", value: "startingTime" },
        { text: "End Time", value: "endingTime" },
        { text: "Price", value: "price" }
      ]
    };
  },
  created() {
    // -------------------------- Get all courses ------------------------------
    this.$http
      .get("/customer/" + this.user.id + "/internship/findAll", {
        headers: { Authorization: "Bearer " + this.$store.state.token }
      })
      .then(res => {
        this.allCourses = res.data.content;
      })
      .catch(e => {
        console.log(e.response);
      });
    // ------------------------------------------------------------------------
  },
  methods: {
    formatDate(date) {
      if (!date) return null;

      //const [year, month, day] = date.split("-");
      let d = new Date(date);

      return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    },
    formatTime(time) {
      return `${time.substring(11, 16)}`;
    },
    // eslint-disable-next-line no-unused-vars
    rowSelect(item) {
      // console.log(item);
    }
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  }
};
</script>
