import { getArticleList, getArticle, createArticle, patchArticle, deleteArticle } from './ArticleService.mjs';
import { getProductList, getProduct, createProduct, patchProduct, deleteProduct } from './ProductService.mjs';

// getArticleList(1, 10, 'id')
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// getArticle(1)
//   .then(data => console.log('Article:', data))
//   .catch(error => console.error(error));

createArticle('NewUpdate', 'holymoly', '없음')
    .then(data => console.log(data))
    .catch(error => console.error(error));

// patchArticle(1, { title: 'Updated Title', content: 'Updated Content' })
//   .then(data => console.log('Updated Article:', data))
//   .catch(error => console.error(error));

// deleteArticle(1)
//   .then(data => console.log('Deleted Article:', data))
//   .catch(error => console.error(error));


// const productList = await getProductList(1, 10, 'a');
// console.log('Product List:', productList);


// // Product API 사용 예제
// (async () => {
//   try {
//     const productList = await getProductList(1, 10, 'keyword');
//     console.log('Product List:', productList);

//     const product = await getProduct(1);
//     console.log('Product:', product);

//     const newProduct = await createProduct('New Product', 'New Description', 100, ['tag1', 'tag2'], ['image1_url']);
//     console.log('Created Product:', newProduct);

//     const updatedProduct = await patchProduct(1, { name: 'Updated Product', description: 'Updated Description' });
//     console.log('Updated Product:', updatedProduct);

//     const deletedProduct = await deleteProduct(1);
//     console.log('Deleted Product:', deletedProduct);
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// })();
