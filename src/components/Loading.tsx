import { ImSpinner2 } from "react-icons/im";

const Loading: React.FC<any> = (props) => {
  const { loading } = props;

  if (loading) {
    return (
      <div className="relative py-11 sm:py-8 loadingScreen">
        <ImSpinner2 className="absolute animate-spin" />
      </div>
    );
  }

  return <></>;
};

export default Loading;
