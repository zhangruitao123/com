const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        number: 1
      },
      {
        name: '《编程艺术》',
        date: '2006-2',
        price: 59.00,
        number: 1
      },
      {
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        number: 1
      },
      {
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        number: 1
      }
    ],
    sumPrice: 0
  },
  computed: {
    calcuSum() {
      /*let books = this.books;
      for(let i=0; i<books.length; i++){
        let book = books[i];
        this.sumPrice += book.price*book.number;
      }*/
      return this.books.reduce((pre, curVule) => pre + curVule.price*curVule.number, 0)
    }
  },

})

let newList = [10, 20, 111, 222, 444, 40, 50];
console.log(newList);
 let sum = newList.filter(function (n) {
   return n < 100;
 }).map(function (n) {
   return 2*n;
 }).reduce(function (pre, curvalue) {
   return pre + curvalue;
 }, 0)
console.log(sum);
 let sum2 = newList.filter(n => n<100).map(n => n*2).reduce((pre, curval) => pre + curval ,2)
console.log(sum2);