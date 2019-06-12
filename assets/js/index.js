var app = new Vue({
  el: '#app',
  data: {
    step: 1,
    bookList: [
      {
        id: 1,
        title: '大学物理实验',
        img: 'https://image.ddiu.site/img/20190612172117.png',
        isbn: '9787040341096',
        selected: false,
        mount: 1
      }, {
        id: 2,
        title: '大学物理实验',
        img: 'https://image.ddiu.site/img/20190612172117.png',
        isbn: '9787040341096',
        selected: false,
        mount: 1
      }, {
        id: 3,
        title: '大学物理实验',
        img: 'https://image.ddiu.site/img/20190612172117.png',
        isbn: '9787040341096',
        selected: false,
        mount: 0
      }, {
        id: 4,
        title: '大学物理实验',
        img: 'https://image.ddiu.site/img/20190612172117.png',
        isbn: '9787040341096',
        selected: false,
        mount: 1
      }, {
        id: 5,
        title: '大学物理实验',
        img: 'https://image.ddiu.site/img/20190612172117.png',
        isbn: '9787040341096',
        selected: false,
        mount: 0
      }, {
        id: 6,
        title: '大学物理实验',
        img: 'https://image.ddiu.site/img/20190612172117.png',
        isbn: '9787040341096',
        selected: false,
        mount: 1
      }
    ],
    selectedMount: 0,
    selectedBook: [],
    selectIdStr: [],
  },
  mounted() {
    // axios.get('https://api.ddiu.site/book')
    //   .then((res) => {
    //     this.loading = false;
    //     this.bookList = res.data;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
  methods: {
    handleCardClick (item) {
      if (item.mount > 0) {
        if (item.selected) {
          item.selected = false;
          this.selectedMount--;
        } else {
          item.selected = true;
          this.selectedMount++;
        }
      }
    },
    getSelectList () {
      let selectedBook = [];
      let selectId = [];
      this.bookList.forEach((item) => {
        if (item.selected) {
          selectedBook.push(item);
          selectId.push(item.id);
        }
      })
      this.selectedBook = selectedBook;
      this.selectIdStr = window.btoa(selectId.join('|'));
      this.step = 2;
      // console.log(this.selectIdStr);
    },
    handleBack () {
      this.step = 1;
    }
  }
})
