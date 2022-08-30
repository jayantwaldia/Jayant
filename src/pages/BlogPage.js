import Card from "../shared/Card";

function BlogPage() {
  return (
    <>
      <div className="Main">
        <p className="Page-Heading">Blog </p>
        <p className="Description">
          Not heavy with words, but here are some thoughts I randomly cross by
          on the Internet
        </p>
      </div>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </>
  );
}

export default BlogPage;
