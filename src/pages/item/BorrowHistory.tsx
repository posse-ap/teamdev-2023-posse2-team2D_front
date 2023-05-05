import SimpleTabs from "../../components/SimpleTabs";

const BorrowHistory = () => {
  return (
    <div>
      <SimpleTabs
        labels={["借用中", "返却済"]}
        children={[
          <div>借用中</div>,
          <div>返却済</div>,
        ]}
      />
    </div>
  );
};

export default BorrowHistory;