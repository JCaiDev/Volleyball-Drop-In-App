import HostGameForm from "../../components/HostGameForm";

const HostGamePage: React.FC = () => {
  return (
    <div>
      <h1>Host a Game</h1>
      <HostGameForm userId="1" />
    </div>
  );
};

export default HostGamePage;
