<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{name}}</p>
    <v-btn @click="changeName()">이름변경</v-btn>
    <hr>
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        sm6
      >
        <UserDetail
          :name='name'
          :address='address'
          :phone='phone'
          :hasDog='hasDog'
        ></UserDetail>
      </v-flex>
      <v-flex
        xs12
        sm6
      >
        <UserEdit></UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  components: {
    UserDetail,
    UserEdit
  },

  data: function() {
    return {
      name: "Hoze",
      address: "Seoul",
      phone: "1234-5678",
      hasDog: true
    };
  }
};
</script>   