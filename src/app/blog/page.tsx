import Container from "@/components/shared/Container";
import NMBlog from "@/components/ui/core/NMBlog/NMBlog";

const page = () => {
  return (
    <Container>
      <h1 className="text-center text-[#FF2D55] font-normal lg:my-4 text-5xl">
        Блог
      </h1>
      <NMBlog />
    </Container>
  );
};

export default page;
