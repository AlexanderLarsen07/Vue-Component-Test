app.component('add-book', {
  emits: ['add-book'],
  data() {
    return {
      title: '',
      author: '',
      published: '',
      error: ''
    }
  },
  methods: {
    addBook() {
      const title = this.title.trim()
      const author = this.author.trim()

      // Reject incomplete details and non-integer publication years.
      if (!title || !author || !Number.isInteger(this.published)) {
        this.error = 'Enter a title, an author, and a valid publication year.'
        return
      }

      // Send the new book to the parent app, which owns the books array.
      this.$emit('add-book', {
        title,
        author,
        published: this.published
      })

      this.title = ''
      this.author = ''
      this.published = ''
      this.error = ''
    }
  },
  template:
  /*html*/
  `
    <!-- Prevent a page reload when the form is submitted. -->
    <form @submit.prevent="addBook">
      <h2>Add a new book to the list:</h2>
      <input v-model="title" placeholder="Enter book title" required />
      <br/>
      <input v-model="author" placeholder="Enter book author" required />
      <br/>
      <input v-model.number="published" type="number" step="1" placeholder="Enter book published year" required />
      <br/>
      <button type="submit">Add Book</button>
      <p v-if="error" role="alert">{{ error }}</p>
    </form>
  `
})