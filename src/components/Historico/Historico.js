import { useEffect, useState } from "react";
import { getWebsites } from "../../firebase/api";
import CardHistorico  from "./CardHistorico";

 const Historico = () => {
  const [websites, setWebsites] = useState([]);

  const getLinks = async () => {
    const querySnapshot = await getWebsites();
    // onGetLinks((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
    });
    setWebsites(docs);
    // });
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <>
     <div style={{ marginBottom: "80px"}}>
      
     
      {websites.map((link) => (
          
          <div className="col-md-4" key={link.id}>
            <CardHistorico link={link} />
          </div>

      ))}
      </div>
    </>
  );
};

export default Historico;