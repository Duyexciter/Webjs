    var product = [
        {
            id:"SP1",
            name:"iphone 14 Pro Max ",
            img : "s11.jpg",
            price:24750000,
        },
        {
            id:"SP2",
            name:"iPhone 13 128GB",
            img : "s12.jpg",
            price:16890000,
        },
        {
            id:"SP3",
            name:"Samsung Galaxy Z Flip4",
            img : "s13.jpg",
            price:14290000,
        },
        {
            id:"SP4",
            name:"Samsung S23 Ultra",
            img : "s14.jpg",
            price:22990000,
        },
        {
            id:"SP5",
            name:"iphone 14",
            img : "s21.jpg",
            price:21000000,
        },
        {
            id:"SP6",
            name:"iphone 11",
            img : "s22.jpg",
            price:10000000,
        },
        {
            id:"SP7",
            name:"ipad pro 11",
            img : "s23.jpg",
            price:2000000,
        },
        {
            id:"SP8",
            name:"ipad mini 6",
            img : "s24.jpg",
            price:11000000,
        },
    ];
    var pro = [];

    function saveproduct() {
        sessionStorage.setItem('shopping', JSON.stringify(pro));
      }
// đẩy mảng product vào local
    function Save(){
        localStorage.setItem('listProduct',JSON.stringify(product))
    }
   
   //lấy sản phẩm 
   function load(){
       product = JSON.parse(localStorage.getItem('listProduct'));
   } 
   //xuất sản phẩm ra html
   if (localStorage.getItem("listProduct") != null) {
    load();
}
if (localStorage.getItem("listProduct") == null) {
    Save();
}
   var listLocal = function(){
       var listproduct ="";
       for (var i in product){
           var data = JSON.parse(JSON.stringify(product[i]))
        var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
        listproduct += '<div class="card product p-2" styte="width:auto">'; 
        listproduct += '<a ><img  class="proo card-img-top" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" src="img/' + data.img +'" alt="..."></a>';
        listproduct += '<div class="card-title product-title text-center h5" ><a href="#"  class="proo" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'">'+data.name+'</a></div>';
        listproduct += '<div class="price text-center h6">'+data.price+'₫</div>';
        listproduct +=  '<span class="text-center add-to-cart add-cart btn btn-outline-warning" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" onclick="tks()">';
        listproduct +=  '<a>';
        listproduct +=  '<i class="fas fa-cart-plus"></i>';
        listproduct +=  '</a>';
        listproduct +=  '</span>';
        listproduct += '</div>';
        listproduct += '</div>';
        document.getElementById("banchay").innerHTML += listproduct;
       }
       Save();
       
   }
   
   listLocal();


