import SimpleTabs from "../../components/SimpleTabs";

const ParticipationHistory = () => {
  return (
    <div>
      <SimpleTabs
        labels={["予約中", "参加済"]}
        children={[
          <div>予約中</div>,
          <div>参加済</div>,
        ]}
      />
    </div>
  );
};

export default ParticipationHistory;