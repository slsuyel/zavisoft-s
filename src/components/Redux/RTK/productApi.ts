import { baseApi } from "../baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ offset, limit }: { offset: number; limit: number }) => `products?offset=${offset}&limit=${limit}`,
      providesTags: ["Products"],
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
    getCategories: builder.query({
      query: () => "categories",
      providesTags: ["Categories"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
} = productApi;
