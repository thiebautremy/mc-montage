type SpacerProps = {
  height: string;
};
const Spacer: React.FC<SpacerProps> = ({ height }) => {
  const getHeight = (height: string) => {
    switch (height) {
      case "small":
        return "1rem";
        break;
      case "medium":
        return "2rem";
        break;
      default:
        return "3rem";
        break;
    }
  };
  return <div style={{ height: getHeight(height) }}></div>;
};

export default Spacer;
