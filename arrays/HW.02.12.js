const book = {
    title: "informatic",
    author: "Мадияр Турганов",
    pages: 342              ,
    isRead: false,
    readBook() {
        console.log(`Сіз ${this.title} кітабын ${this.author} жазған оқып жатырсыз. `); 
    },
    toggleReadStatus() { 
        this.isRead = !this.isRead; 
        console.log(`Оқу күйі жаңартылды: ${this.isRead}.`); 
    }
};

book.readBook();
book.toggleReadStatus();
book.author = "madiyar_turganov";
book.readBook();