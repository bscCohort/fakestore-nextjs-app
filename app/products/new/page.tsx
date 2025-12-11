import ProductForm from "@/components/ProductForm";

export default function AddProductPage() {
  async function handleAdd(formData: any) {
    await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Product Added!");
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow mt-10">
      <h1 className="text-2xl font-bold mb-6">Add Product</h1>

      <ProductForm submitText="Add Product" onSubmit={handleAdd} />
    </div>
  );
}
