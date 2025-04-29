import Container from "@/components/shared/Container";
import TitleAndText from "@/components/shared/TitleAndText";
import NMBlog from "@/components/ui/core/NMBlog/NMBlog";

const Blog = () => {
  return (
    <Container>
      <div className="mt-20 mb-10">
        <TitleAndText
          title="READ MORE IN OUR BLOG"
          text="More useful information about travel"
        />
        <NMBlog />
      </div>
    </Container>
  );
};

export default Blog;
