import Card from "../components/Card";
const Page = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((index: number) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default Page;
