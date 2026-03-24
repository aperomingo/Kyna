import Image from "next/image";
import { cn } from "@/lib/utils";

interface Product {
  title: string;
  description: string;
  image: string;
}

interface ProductSectionProps {
  products: Product[];
}

export default function ProductSection({ products }: ProductSectionProps) {
  return (
    <div className="space-y-24 md:space-y-32">
      {products.map((product, index) => (
        <div 
          key={index} 
          className={cn(
            "flex flex-col gap-12 items-center",
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          )}
        >
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              {product.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>
          <div className="flex-1 w-full aspect-video md:aspect-square relative rounded-[2rem] overflow-hidden glass shadow-2xl">
            <Image 
              src={product.image} 
              alt={product.title} 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
