import SimpleTabs from "../../components/SimpleTabs";

const LentHistory = () => {
  return (
    <div>
      <SimpleTabs
        labels={["出品中", "貸出中", "貸し出し申請中"]}
        children={[
          <div>出品中</div>,
          <div>貸出中</div>,
          <div>貸し出し申請中</div>,
        ]}
      />
    </div>
  );
};

export default LentHistory;