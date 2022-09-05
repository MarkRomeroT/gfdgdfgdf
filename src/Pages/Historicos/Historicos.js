import Historico from "../../components/Historico/Historico";
import { ListOrdenes } from "../../components/ListOrdenes/ListOrdenes";
import NavBar from "../../components/NavBar/NavBar";
import OptionsNavNew from "../../components/OptionsNav/OptionsNavNew";

function Historicos() {
  return (
    <div className="Historicos">
      <NavBar
      path="Historicos"
      />

      <Historico/>

      <OptionsNavNew/>
    </div>
  );
}

export default Historicos;