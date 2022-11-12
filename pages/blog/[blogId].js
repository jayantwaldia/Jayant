import { useRouter } from "next/router";

export default function Blog() {
  const router = useRouter();
  const blogId = router.query.blogId;
  return <h1>yolo {blogId}</h1>;
}
