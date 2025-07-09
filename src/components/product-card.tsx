"use client";

import { useState } from "react";
import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description?: string;
  quality: number;
  category?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product, quantity: number) => void;
  onViewDetail?: (product: Product) => void;
  className?: string;
}

export default function ProductCard({
  product,
  onAddToCart,
  onViewDetail,
  className = "",
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    if (!onAddToCart) return;

    setIsLoading(true);
    try {
      await onAddToCart(product, quantity);
      // Reset quantity after adding to cart
      setQuantity(1);
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewDetail = () => {
    if (onViewDetail) {
      onViewDetail(product);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <Card
      className={`group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 py-0 ${className}`}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            -{discountPercentage}%
          </div>
        )}

        {/* quality Badge */}
        <div className="absolute top-2 right-2">
          {product.quality > 0 ? (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-md">
              Còn {product.quality}
            </span>
          ) : (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-md">
              Hết hàng
            </span>
          )}
        </div>
      </div>

      <CardContent className="p-4">
        {/* Product Name */}
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Product Description */}
        {product.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* quality Display */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-600">Số lượng:</span>
          <span className="text-sm font-medium text-gray-900">
            {product.quality}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="grid grid-cols-2 gap-2 w-full">
          <Button
            variant="outline"
            size="sm"
            onClick={handleViewDetail}
            className="flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            Chi tiết
          </Button>

          <Button
            onClick={handleAddToCart}
            disabled={product.quality === 0 || isLoading}
            className="flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            {isLoading ? "Đang thêm..." : "Thêm vào giỏ"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
