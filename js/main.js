const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template with components',
            books: [
                { id: 1, title: "The Lord of the Rings", author: "J.R.R. Tolkien", published: 1954 },
                { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", published: 1937 },
                { id: 3, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", published: 1997 }
            ]
        }
    },
    methods: {
        addBook(book) {
            // Choose an ID one higher than the largest ID already in the list.
            const id = this.books.reduce(
                (highestId, currentBook) => Math.max(highestId, Number(currentBook.id) || 0),
                0
            ) + 1;

            // Add the generated ID together with the details sent by the form.
            this.books.push({
                id,
                ...book
            });
        }
    }
})
