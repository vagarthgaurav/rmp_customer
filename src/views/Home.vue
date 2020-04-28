<template>
  <div class="home">
    <v-container class="mt-12">
      <v-card class="mx-auto" width="95%">
        <v-card-title>
          {{$t('courses')}}
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-account-search-outline"
            :label="$t('search')"
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
          <template v-slot:header.trainingCenterLocation="{ header }">{{ header.text = $t('location') }}</template>
          <template v-slot:header.startingDate="{ header }">{{ header.text = $t('startDate') }}</template>
          <template v-slot:header.endingDate="{ header }">{{ header.text = $t('endDate') }}</template>
          <template v-slot:header.startingTime="{ header }">{{ header.text = $t('startTime') }}</template>
          <template v-slot:header.endingTime="{ header }">{{ header.text = $t('endTime') }}</template>
          <template v-slot:header.price="{ header }">{{ header.text = $t('price') }}</template>

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
      i18n: null,
      headers: null
    };
  },
  created() {
    this.i18n =
      this.$i18n.locale == "fr"
        ? this.$i18n.messages.fr
        : this.$i18n.messages.en;

    this.headers = [
      { text: this.i18n.location, value: "trainingCenterLocation" },
      { text: this.i18n.startDate, value: "startingDate" },
      { text: this.i18n.endDate, value: "endingDate" },
      { text: this.i18n.startTime, value: "startingTime" },
      { text: this.i18n.endTime, value: "endingTime" },
      { text: this.i18n.price, value: "price" }
    ];

    // -------------------------- Get all courses ------------------------------
    this.$http
      .get("/customer/" + this.user.id + "/internship/findAll", {
        headers: { Authorization: "Bearer " + this.$store.state.token }
      })
      .then(res => {
        this.allCourses = res.data.content;
      })
      .catch(() => {
        //console.log(e.response);
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
