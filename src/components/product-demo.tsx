"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./product-grid";
import { Product } from "./product-card";
import supabase from "@/utils/supabase";

// Dữ liệu sản phẩm mẫu

export default function ProductDemo() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: phoneData, error } = await supabase
        .from("phone")
        .select("*");
      setData(phoneData as Product[]);
    };
    fetchData();
  }, []);

  const [cartItems, setCartItems] = useState<
    Array<{ product: Product; quantity: number }>
  >([]);

  const handleAddToCart = async (product: Product, quantity: number) => {
    // Mô phỏng API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { product, quantity }];
      }
    });

    toast.success(`Đã thêm ${quantity} ${product.name} vào giỏ hàng!`);
  };

  const handleViewDetail = (product: Product) => {
    toast.info(`Xem chi tiết sản phẩm: ${product.name}`);
    // Có thể navigate đến trang chi tiết sản phẩm ở đây
    // router.push(`/products/${product.id}`)
  };

  return (
    <div className="max-w-[87.5rem] mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Sản phẩm nổi bật
        </h1>
        <p className="text-gray-600">
          Khám phá các sản phẩm chất lượng cao với giá tốt nhất
        </p>
      </div>

      {/* Thống kê giỏ hàng */}
      {cartItems.length > 0 && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">
            Giỏ hàng của bạn:
          </h3>
          <div className="space-y-1">
            {cartItems.map((item, index) => (
              <div key={index} className="text-sm text-blue-800">
                {item.product.name} - Số lượng: {item.quantity}
              </div>
            ))}
          </div>
          <div className="mt-2 text-sm font-medium text-blue-900">
            Tổng: {cartItems.reduce((sum, item) => sum + item.quantity, 0)} sản
            phẩm
          </div>
        </div>
      )}

      {/* Grid sản phẩm */}
      <ProductGrid
        products={data}
        onAddToCart={handleAddToCart}
        onViewDetail={handleViewDetail}
      />
    </div>
  );
}
