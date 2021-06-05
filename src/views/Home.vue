<template>
  <div id="app">
    <div>
      <!-- {{ substr }} -->
      <!-- <img :src="myImage" /> -->
      <!-- <img v-bind:src="'data:image/png;base64,' + substr" /> -->
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 mt-2">
          <VueSignaturePad
            id="signature"
            width="100%"
            height="500px"
            ref="signaturePad"
            :options="options"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-3 mt-2">
          <button class="btn btn-outline-secondary" @click="undo">Undo</button>
        </div>
        <div class="col-3 mt-2">
          <button class="btn btn-outline-primary" @click="save">Save</button>
        </div>
        <div class="col-3 mt-2">
          <button class="btn btn-outline-primary" @click="change">
            Change
          </button>
        </div>
        <div class="col-3 mt-2">
          <button class="btn btn-outline-primary" @click="resume">
            Resume
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    pic: '',
    emp: '',
    substr: '',
    options: {
      penColor: '#c0f'
    }
  }),

  methods: {

    undo () {
      this.$refs.signaturePad.undoSignature()
    },
    save () {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature()

      alert('Open DevTools see the save data.')
      console.log(isEmpty)
      this.pic = data
      this.emp = isEmpty
      this.$store.state.img = data
      this.substr = this.pic.substr(22)
      console.log(this.substr)
      if (data !== '') {
        this.$router.push('/about')
      }
      console.log(this.pic)
    },
    loadImage () {
      // Pretend Ajax call here.
      this.image = this.$store.state.img
    },

    change () {
      this.options = {
        penColor: '#00f'
      }
    },
    resume () {
      this.options = {
        penColor: '#c0f'
      }
    }
  },
  created () {
    this.loadImage()
  },
  computed: {
    myImage () {
      return `data:image/png;base64, ${this.image}`
    }
  }
}
</script>

<style>
#signature {
  border: double 3px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4bc5e8, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
</style>
