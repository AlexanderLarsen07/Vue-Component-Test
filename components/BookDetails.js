//<!-- solution
app.component('book-details', {
  props: {
    booklist: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `
      <h2>Books List</h2>
      <div>       
        <ul>
          <!-- Use each book's ID as a stable key while rendering the list. -->
          <li v-for="book in booklist" :key="book.id">
            {{ book.title }} by {{ book.author }} ({{ book.published }})
          </li>
        </ul> 
      </div>
  `
})
//solution -->