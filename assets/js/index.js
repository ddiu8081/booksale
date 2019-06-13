var app = new Vue({
  el: '#app',
  data: {
    step: 1,
    bookList: [
      {
        id: 1,
        title: '高等数学（上册）',
        img: 'http://image.ddiu.site/img/20190613091358.png!/fw/120',
        isbn: '9787040306606',
        selected: false,
        mount: 1
      }, {
        id: 2,
        title: '高等数学（下册）',
        img: 'http://image.ddiu.site/img/20190613091443.png!/fw/120',
        isbn: '9787040315363',
        selected: false,
        mount: 1
      }, {
        id: 3,
        title: '线性代数与解析几何',
        img: 'http://image.ddiu.site/img/20190613091540.png!/fw/120',
        isbn: '9787030340986',
        selected: false,
        mount: 1
      }, {
        id: 4,
        title: '概率统计与随机过程',
        img: 'http://image.ddiu.site/img/20190613091628.png!/fw/120',
        isbn: '9787115287915',
        selected: false,
        mount: 1
      }, {
        id: 5,
        title: '数学实验',
        img: 'http://image.ddiu.site/img/20190613091754.png!/fw/120',
        isbn: '9787030267146',
        selected: false,
        mount: 1
      }, {
        id: 6,
        title: '大学物理实验',
        img: 'http://image.ddiu.site/img/20190613092456.png!/fw/120',
        isbn: '9787040341096',
        selected: false,
        mount: 1
      }, {
        id: 7,
        title: '思修（2015年修订版）',
        img: 'http://image.ddiu.site/img/20190613092718.png!/fw/120',
        isbn: '9787040431988',
        selected: false,
        mount: 1
      }, {
        id: 8,
        title: '近现代史（2015年修订版）',
        img: 'http://image.ddiu.site/img/20190613092809.png!/fw/120',
        isbn: '9787040431995',
        selected: false,
        mount: 1
      }, {
        id: 9,
        title: '马原（2015年修订版）',
        img: 'http://image.ddiu.site/img/20190613092901.png!/fw/120',
        isbn: '9787040431971',
        selected: false,
        mount: 1
      }, {
        id: 10,
        title: '毛概（2018年版）',
        img: 'http://image.ddiu.site/img/20190613093023.png!/fw/120',
        isbn: '9787040494815',
        selected: false,
        mount: 1
      }, {
        id: 11,
        title: '军事理论教程',
        img: 'http://image.ddiu.site/img/20190613093406.png!/fw/120',
        isbn: '9787305135446',
        selected: false,
        mount: 1
      }, {
        id: 12,
        title: '当代大学生心理健康教育',
        img: 'http://image.ddiu.site/img/20190613094030.png!/fw/120',
        isbn: '9787560283906',
        selected: false,
        mount: 1
      }, {
        id: 13,
        title: 'C语言程序设计(第2版)',
        img: 'http://image.ddiu.site/img/20190613093247.png!/fw/120',
        isbn: '9787115367525',
        selected: false,
        mount: 1
      }, {
        id: 14,
        title: 'C语言程序设计习题解析与实验指导(第2版)',
        img: 'http://image.ddiu.site/img/20190613093619.png!/fw/120',
        isbn: '9787115370457',
        selected: false,
        mount: 1
      }, {
        id: 15,
        title: '全新版大学英语2（第二版）',
        img: 'http://image.ddiu.site/img/20190613094134.png!/fw/120',
        isbn: '9787544637176',
        selected: false,
        mount: 1
      }, {
        id: 16,
        title: '全新版大学英语2 快速阅读',
        img: 'http://image.ddiu.site/img/20190613094252.png!/fw/120',
        isbn: '9787544636582',
        selected: false,
        mount: 1
      }, {
        id: 17,
        title: '全新版大学英语3（第二版）',
        img: 'http://image.ddiu.site/img/20190613094434.png!/fw/120',
        isbn: '9787544637213',
        selected: false,
        mount: 1
      }, {
        id: 18,
        title: '全新版大学英语3 快速阅读',
        img: 'http://image.ddiu.site/img/20190613094530.png!/fw/120',
        isbn: '9787544636599',
        selected: false,
        mount: 1
      }, {
        id: 19,
        title: '全新版大学英语4（第二版）',
        img: 'http://image.ddiu.site/img/20190613094602.png!/fw/120',
        isbn: '9787544637152',
        selected: false,
        mount: 1
      }, {
        id: 20,
        title: '全新版大学英语4 快速阅读',
        img: 'http://image.ddiu.site/img/20190613094644.png!/fw/120',
        isbn: '9787544636605',
        selected: false,
        mount: 1
      }, {
        id: 21,
        title: '模拟电子技术基础（第3版）',
        img: 'http://image.ddiu.site/img/20190613094802.png!/fw/120',
        isbn: '9787111545224',
        selected: false,
        mount: 1
      }, {
        id: 22,
        title: '数字电路与系统设计',
        img: 'http://image.ddiu.site/img/20190613094858.png!/fw/120',
        isbn: '9787115377388',
        selected: false,
        mount: 1
      }, {
        id: 23,
        title: '电路分析基础（第4版）',
        img: 'http://image.ddiu.site/img/20190613094959.png!/fw/120',
        isbn: '9787115382856',
        selected: false,
        mount: 1
      }, {
        id: 24,
        title: '计算机图形学教程',
        img: 'http://image.ddiu.site/img/20190613095048.png!/fw/120',
        isbn: '9787115358004',
        selected: false,
        mount: 1
      }, {
        id: 25,
        title: '数字图像处理与图像通信(第3版)',
        img: 'http://image.ddiu.site/img/20190613095203.png!/fw/120',
        isbn: '9787563539130',
        selected: false,
        mount: 1
      }, {
        id: 26,
        title: 'PhotoShop CS5图形图像处理案例教程（第2版）',
        img: 'http://image.ddiu.site/img/20190613095721.png!/fw/120',
        isbn: '9787301249192',
        selected: false,
        mount: 1
      }, {
        id: 27,
        title: '数字视频策划与制作',
        img: 'http://image.ddiu.site/img/20190613095806.png!/fw/120',
        isbn: '9787121287190',
        selected: false,
        mount: 1
      }
    ],
    selectedMount: 0,
    selectedBook: [],
    selectIdStr: [],
  },
  mounted() {
    // axios.get('http://api.ddiu.site/book')
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
      if (this.selectedMount > 0) {
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
      }
    },
    handleBack () {
      this.step = 1;
    }
  }
})
