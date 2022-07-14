<template>
  <div>
    <h2 class="color-primary">Check our main users!</h2>
    <div class="list-container">
      <div v-for='(user, index) in getUsers' :key='index'>
        <UserCard 
          :user='user' 
          @open-delete-modal="openDeleteModal"
        />
      </div>
    </div>

    <DeleteModal 
      v-if="showDeleteModal"
      @close="closeDeleteModal"
      @delete-user="deleteUser"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from '@/components/UserCard.vue';
import DeleteModal from '@/components/DeleteModal.vue';

export default {
  name: 'HomeView',
  components: {
    UserCard,
    DeleteModal
  },
  data() {
    return {
      showDeleteModal: false,
      selectedUserId: null
    }
  },
  computed: {
    ...mapGetters([
        "getUsers"
    ])
  },
  methods: {
    openDeleteModal(user) {
      this.showDeleteModal = true;
      this.selectedUserId = user.id;
    },
    closeDeleteModal() {
      this.showDeleteModal = false;
      this.selectedUserId = null;
    },
    deleteUser() {
      this.$store.dispatch('deleteUser', this.selectedUserId);
      this.closeDeleteModal();
    }
  }
}
</script>

<style lang="scss">
    
.list-container {
  display: grid; 

  @media (min-width: 420px) {
    grid-template-columns: 50%  50%;
  }

  @media (min-width: 768px) {
    grid-template-columns: 25%  25% 25% 25%;
  }
}
</style>