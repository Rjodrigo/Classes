import { test, expect } from "vitest";
import { ProductsRepository } from "../repositories/products-repository";
import { Product } from "../entities/product";
import { RegisterProductUseCase } from "./register-product";

const fakeProductsRepository: ProductsRepository = {
  create: async (product: Product): Promise<void> => {
    return;
  },
};

test("register product", async () => {
  const registerProduct = new RegisterProductUseCase(fakeProductsRepository);

  const product = await registerProduct.execute({
    name: "Product Test",
    categoryId: "1",
    image: "image",
    price: 100,
  });

  expect(product.content).toEqual(
    expect.objectContaining({
      name: "Product Test",
      slug: "product-test",
      price: 100,
    })
  );
});