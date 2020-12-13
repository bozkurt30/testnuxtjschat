<template>
  <div>
    <h3>Lütfen google ile giriş yapın</h3>
    <button @click="login">
      Google İle Giriş Yap
    </button>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {

  methods: {
    login () {
      const provider = new firebase.auth.GoogleAuthProvider()

      firebase.auth().signInWithPopup(provider).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const token = result.credential.accessToken
        // // The signed-in user info.
        // const user = result.user

        this.$router.push('/chat')
      })
    }
  }
}
</script>
