export default async function ProductDetail({ params }: Props) {
  const { id } = await params;  // Unwrap the promise

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </main>
    );
  }

  const product = await res.json();

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <a href="/products" className="text-blue-500 underline">
        ← Back
      </a>

      <div className="mt-6 flex flex-col md:flex-row gap-10">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-80 h-80 object-contain bg-white rounded-lg shadow"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <p className="text-2xl text-blue-600 font-semibold">
            ${product.price}
          </p>

          <p className="mt-2 text-sm text-gray-400">
            Category: {product.category}
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href={`/products/${product.id}/edit`}
              className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
            >
              Edit
            </a>

            <form action={`/products/${product.id}/delete`} method="post">
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
