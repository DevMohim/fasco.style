import { IProductType } from "@/types/Product.type";
import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";

interface IProductCardProps {
  product: IProductType;
}

const ProductCard = ({ product }: IProductCardProps) => {
  const { title, thumbnail, price, discount, category, rating, inStock ,stock } =
    product;

  const discountedPrice = Math.round(price - (price * discount) / 100);

  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-lg">
      {/* Product Image */}
      <div className="relative bg-gray-100">
        <Image
          src={thumbnail}
          alt={title}
          width={400}
          height={400}
          className="h-60 w-full object-cover"
        />

        {discount > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
            -{discount}%
          </span>
        )}
      </div>

      {/* Product Information */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
          {category}
        </p>

        {/* Product Name */}
        <h2 className="mt-2 truncate text-base font-semibold text-gray-900">
          {title}
        </h2>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2 text-sm">
          <FaStar className="text-yellow-400" />
          <span className="font-medium">{rating.toFixed(1)}</span>
        </div>

        {/* Stock Status */}
        <div className="mt-3 flex items-center justify-between gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              inStock
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-600"
            }`}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </span>

          <span className="text-xs text-gray-500">
            {inStock ? `${stock} items left` : "0 items left"}
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">
            ৳{discountedPrice.toLocaleString("en-BD")}
          </span>

          {discount > 0 && (
            <span className="text-sm text-gray-400 line-through">
              ৳{price.toLocaleString("en-BD")}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          type="button"
          disabled={!inStock}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-purple-600 disabled:cursor-not-allowed disabled:bg-gray-300 cursor-pointer"
        >
          <FaShoppingCart />
          {inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
