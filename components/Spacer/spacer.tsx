type SpacerProps = {
  height: string;
};
const Spacer: React.FC<SpacerProps> = ({ height }) => {
  const getHeight = (height: string) => {
    switch (height) {
      case "small":
        return "1rem";
      case "medium":
        return "2rem";
      default:
        return "3rem";
    }
  };
  return <div style={{ height: getHeight(height) }}></div>;
};

export default Spacer;
