import { useState } from "react";
import { products } from "../../api/products";
import ProductCard from "../../components/common/ProductCard";
import SearchBar from "../../components/ui/SearchBar";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      {/* Hero */}
      <section className="py-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Discover Our Products</h2>
        <p className="text-gray-600">Quality items for everyday life</p>
      </section>

      {/* Search */}
      <div className="max-w-md mx-auto mb-8">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      {/* Products */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </MainLayout>
  );
}
