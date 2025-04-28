import Container from "@/components/shared/Container";
import TitleAndText from "@/components/shared/TitleAndText";
import NMBlog from "@/components/ui/core/NMBlog/NMBlog";

const Blog = () => {
  return (
    <Container>
      <div className="mt-20 mb-10">
        <TitleAndText
          title="ЧИТАЙТЕ БОЛЬШЕ В НАШЕМ БЛОГЕ"
          text="Больше полезной информации о путешествиях"
        />
        <NMBlog />
      </div>
    </Container>
  );
};

export default Blog;
