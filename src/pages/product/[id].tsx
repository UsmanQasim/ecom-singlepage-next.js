// Imports from React & Next
import { MouseEventHandler } from "react";
import { useRouter } from "next/router";

// Component Imports
import { Button } from "@/components";

function ProductPage() {
  const router = useRouter();

  const { id } = router.query;

  const clickHandler: MouseEventHandler<HTMLButtonElement> = () => {
    // Use Next Router to navigate back
    router.back();
  };

  return (
    <div>
      <h1>You are viewing product {id}</h1>
      <Button onClick={clickHandler}>Go Back</Button>
    </div>
  );
}

export default ProductPage;
