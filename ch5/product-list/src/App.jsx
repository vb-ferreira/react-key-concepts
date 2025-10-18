import { useState } from 'react';

// Lista inicial de produtos. Usamos um array de objetos com `id`, `title` e `price`.
// Mantemos isso fora do componente para evitar que a constante seja recriada em cada render.
const INITIAL_PRODUCTS = [
  { id: 1, title: 'React - The Complete Guide [Course]', price: '$19.99' },
  { id: 2, title: 'Stylish Chair', price: '$329.49' },
];

function App() {
  // Declara o estado `productsList` e sua função de atualização `setProductsList`.
  // `useState` é inicializado com `INITIAL_PRODUCTS` para popular a lista na montagem.
  const [productsList, setProductsList] = useState(INITIAL_PRODUCTS);

  // Função que adiciona um novo produto à lista.
  // Repare que usamos a versão callback de setProductsList para garantir que
  // temos o estado mais recente (importante quando atualizações podem ocorrer
  // em sequência ou assincronamente).
  function handleAddProduct() {
    setProductsList((prevProducts) => [
      // O React garante que o primeiro argumento  (prevProducts)
      // é o valor do estado mais recente e atualizado naquele exato momento.
      ...prevProducts,
      // Em seguida adiciona um novo objeto representando o produto.
      // Nota: aqui o `id` está hardcoded como 3 — em produção deveríamos gerar
      // ids únicos dinamicamente (por exemplo, usando um contador, UUID ou
      // usando `Date.now()`).
      {
        id: 3,
        title: 'Another Product',
        price: '$9.99',
      },
    ]);
  }

  // A renderização do componente retorna um fragmento com um botão e uma lista.
  // O botão chama `handleAddProduct` no evento `onClick` para adicionar itens.
  return (
    <>
      {/* Botão que dispara a adição do produto quando clicado */}
      <button onClick={handleAddProduct}>Add Product</button>
      <ul>
        {/* Mapeia cada produto do estado para um <li>. Sempre forneça uma `key` única */}
        {productsList.map((product) => (
          <li key={product.id}>
            {/* Exibe título e preço do produto */}
            {product.title} ({product.price})
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
