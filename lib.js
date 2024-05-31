const myLibrary = [];
const addBook = document.getElementById("add-book");
const dialogWindow = document.querySelector("dialog");

function Book(title, author, pages, isRead)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book)
{
    myLibrary.push(book);
}

function displayLibrary()
{
    for(let i = 0; i < myLibrary.length; i++)
    {
        console.log(myLibrary[i].title + " by " + myLibrary[i].author + ". " + myLibrary[i].pages + " pages long. Read: " + myLibrary[i].isRead);
    }
}

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const isRead = document.querySelector("#isRead");

const submitButton = document.querySelector("#submit");
const main = document.querySelector(".container2");

addBook.addEventListener("click", () => 
{
    console.log("Adding Book...");

    //clear fields
    ClearFields();

    //display window
    dialogWindow.showModal();

    
});
submitButton.addEventListener("click", () => 
{
    if(title.textContent != null && author.textContent != null && pages.textContent != null)
    {
        console.log("Added book!");
        //add book to library
        let bookToAdd = new Book(title.value, author.value, pages.value, isRead.checked);
        addBookToLibrary(bookToAdd);
        //print library
        displayLibrary();
        console.log(bookToAdd.title + "..." + bookToAdd.isRead);

        //add book card
        DisplayBook(bookToAdd);
    }
});

function ClearFields()
{
    title.value = "";
    author.value = "";
    pages.value = "";
    isRead.checked = false;
}
function DisplayBook(displayedBook)
{
    const card = document.createElement("div");
    const cardTitle = document.createElement("h2");
    const cardAuthor = document.createElement("h2");
    const cardPages = document.createElement("h2");
    const cardRead = document.createElement("button");

    cardTitle.textContent = "Title: " + displayedBook.title;
    cardAuthor.textContent = "Author: " + displayedBook.author;
    cardPages.textContent = "Pages: " + displayedBook.pages;

    //button style
    cardRead.style.fontSize = "20px";
    cardRead.style.padding = "20px 100px";
    cardRead.style.backgroundColor = ReadColor(displayedBook);
    ChangeReadText(displayedBook, cardRead);

    cardRead.addEventListener("click", () =>
    {
        if(displayedBook.isRead)
        {
            //now didn't read book
            cardRead.style.backgroundColor = "red";
            displayedBook.isRead = false;
            ChangeReadText(displayedBook, cardRead);
        }
        else if(!displayedBook.isRead)
        {
            //read book
            cardRead.style.backgroundColor = "green";
            displayedBook.isRead = true;
            ChangeReadText(displayedBook, cardRead);
        }
    });

    //add elements to div
    main.appendChild(card);
    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardRead);

    //card style
    card.style.display = "inline-block";
    card.style.width = "20%";
    card.style.backgroundColor = "#DC5F00";
    card.style.color = "#373A40";
    card.style.border = "5px solid";
    card.style.borderColor = "#373A40";
    card.style.padding = "20px";

    //card read button styling
    cardRead.style.width = "100%";
    cardRead.style.display = "block";
    cardRead.style.textAlign = "center";
    cardRead.style.whiteSpace = "nowrap";
}
function ReadColor(book)
{
    if(book.isRead)
    {
        return "green";
    }
    else
    {
        return "red";
    }
}
function ChangeReadText(displayedBook, cardRead)
{
    if(displayedBook.isRead)
    {
        cardRead.innerText = "Read";
    }
    else
    {
        cardRead.innerText = "Not Read";
    }
}
