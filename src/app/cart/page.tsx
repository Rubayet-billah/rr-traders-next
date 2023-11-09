"use client";
import CartPage from "@/components/cart/CartPage";
import { useRouter } from "next/navigation";
import React from "react";

const Cart = () => {
  const router = useRouter();
  const user = "Jhon doe";
  if (!user) {
    router.push("/auth/login");
    return;
  }
  return (
    <div>
      <CartPage />
    </div>
  );
};

export default Cart;
