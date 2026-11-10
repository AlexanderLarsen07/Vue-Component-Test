const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template with components',
            books: [
                { id: 1, title: "The Lord of the Rings", author: "J.R.R. Tolkien", published: 1954 },
                { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", published: 1937 },
                { id: 3, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", published: 1997 }
            ],
            id:0,
            title:'',
            author:'',
            published:0,
            showBooksList: false
            
        }
    },
    methods: {
        myMethod(){

        },
        AddBook(){
            this.books.push({
                id: this.id,
                title: this.title,
                author: this.author,
                published: this.published
            });
            this.id = 0;
            this.title = '';
            this.author = '';
            this.published = 0;
        },
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
