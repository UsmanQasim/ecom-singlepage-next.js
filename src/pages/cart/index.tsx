// Imports from React & Next
import { MouseEventHandler } from "react";
import { useRouter } from "next/router";

// Component Imports
import { Button } from "@/components";

function CartPage() {
  const router = useRouter();

  const clickHandler: MouseEventHandler<HTMLButtonElement> = () => {
    // Use Next Router to navigate back
    router.back();
  };

  return (
    <div>
      <h1>Welcome to the cart page!</h1>
      <Button onClick={clickHandler}>Go Back</Button>
    </div>
  );
}

export default CartPage;
