import Link from "next/link";

export default function Blog() {
  return (
    <>
      <h1>Blog page</h1>
      <h2>
        <Link href="/blog/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/blog/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="/blog/3" replace> 
          Product 3
        </Link>
      </h2>
    </>
  );
}
