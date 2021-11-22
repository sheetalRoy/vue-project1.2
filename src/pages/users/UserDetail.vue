<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstname">First Name</label>
      <input type="text" id="firstname" v-model.trim="firstName" />
    </div>
    <div class="form-control">
      <label for="lastname">Last Name</label>
      <input type="text" id="lastname" v-model.trim="lastName" />
    </div>
    <div class="form-control">
      <label for="email">Your E-Mail</label>
      <input type="email" id="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" id="password" v-model.trim="password" />
    </div>
    <!-- <p class="errors" v-if="!formIsValid">Please enter a valid email and non-empty message.</p> -->
    <div class="actions">
      <base-button>Save</base-button>
    </div>
  </form>
  <button type="button" @click="deleteData">Delete</button>
</template>
<script>
export default {
    data(){
        return{
            // id: '',
            firstName: '',
            lastName: '',
            email:'',
            password: ''
        }
    },
    methods:{
        submitForm(){
            const dataStr = {
                first: this.firstName,
                last: this.lastName,
                email: this.email,
                password: this.password
            }
            console.log(dataStr)
            return this.$store.dispatch('test', dataStr)
            // return this.$store.commit('test');
        },
        deleteData(){
            return this.$store.dispatch('delete')
        }
    },
    created(){
        const uId = this.$store.getters['userInfo']
        console.log(uId)
        return uId;
    }
}
</script>
<style scoped>
    form {
    margin: 1rem;
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 1rem;
    }

    .form-control {
    margin: 0.5rem 0;
    }

    label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
    }

    input,
    textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
    }

    input:focus,
    textarea:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
    }

    .errors {
    font-weight: bold;
    color: red;
    }

    .actions {
    text-align: center;
    }
</style>