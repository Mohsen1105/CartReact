const productList = [
    {
        id: '1',
        title: 'product1',
        price: 10000,
        image: '../images/product1.jpg'
        // image: 'https://via.placeholder.com/150'
        
    },
    {
        id: '2',
        title: 'product2',
        price: 10000,
        image: '../images/product2.jpg'
    },
    {
        id: '3',
        title: 'product3',
        price: 10000,
        image: '../images/product3.jpg'
    },
    {
        id: '4',
        title: 'product4',
        price: 10000,
        image: '../images/product4.jpg'
    }
]


function getProductData(id){
    let productData =  productList.find((item) => item.id === id)
    return productData
}

export {productList, getProductData}
