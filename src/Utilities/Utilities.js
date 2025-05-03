import Swal from "sweetalert2";

const showAlert = () => {
  Swal.fire({
    title: "<strong>You have already added this book to wish</strong>",
    icon: "info",
    html: `You can add other books`,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Great!
      `,
  });
};

const showAlert1 = () => {
    Swal.fire({
      title: "<strong>You have already added this book to read</strong>",
      icon: "info",
      html: `You can add other books`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> Great!
        `,
    });
  };




// wish books

const getwishbookitems = () => {
  const storedbookdata = localStorage.getItem("wishbooks");
  if (storedbookdata) {
    const bookdata = JSON.parse(storedbookdata);
    return bookdata;
  }
  return [];
};

const savewishbooklocalstorage = (book) => {
  const bookconvert = JSON.stringify(book);
  localStorage.setItem("wishbooks", bookconvert);
};

const setwishbookitems = (id) => {
  const book = getwishbookitems();

  if (book.includes(id)) {
    showAlert();
  } else {
    const newbook = [...book, id];
    savewishbooklocalstorage(newbook);
  }
};

const removewishbook = (id) => {
  const book = getwishbookitems();
  const remainingbook = book.filter((booklist) => booklist !== id);
  savewishbooklocalstorage(remainingbook);
};






// read books

const getbookitems = () => {
    const storedbookdata = localStorage.getItem("books");
    if (storedbookdata) {
      const bookdata = JSON.parse(storedbookdata);
      return bookdata;
    }
    return [];
  };
  
  const savebooklocalstorage = (book) => {
    const bookconvert = JSON.stringify(book);
    localStorage.setItem("books", bookconvert);
  };
  
  const setbookitems = (id) => {
    const book = getbookitems();
  
    if (book.includes(id)) {
      showAlert1();
    } else {
      const newbook = [...book, id];
      savebooklocalstorage(newbook);
    }
  };
  
  const removebook = (id) => {
    const book = getbookitems();
    const remainingbook = book.filter((booklist) => booklist !== id);
    savebooklocalstorage(remainingbook);
  };
  







export { getbookitems, setbookitems, removebook ,getwishbookitems, setwishbookitems, removewishbook  };
