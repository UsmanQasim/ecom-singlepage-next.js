import { useRouter } from 'next/router'

function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  return <div>You are viewing product {id}</div>
}

export default ProductPage;
