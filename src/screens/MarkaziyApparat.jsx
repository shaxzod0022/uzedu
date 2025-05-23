import { Hodimlar, Navbar } from "../components";
import { styles } from "../util/styles";

const MarkaziyApparat = () => {
  return (
    <div>
      <Navbar newClass={"bg-myGreen w-full lg:!px-36 sm:w-full"} />
      <div className="mx-auto p-4 sm:px-6 lg:px-8 xxl:w-full sm:w-[80%] w-full">
        <div>
          <h2 className={`${styles.heading2}`}>Hududiy boshqarma hodimlari</h2>
          <p className="bg-yellow-300 w-[80px] h-[5px]"></p>
        </div>
      </div>
      <Hodimlar initialBrack={5} brack={27} />
    </div>
  );
};

export default MarkaziyApparat;
