import { MdBuild } from "react-icons/md";
import './style.css';
import Img1 from "./logosalt.jpg";

function App() {
  return (
  <div className="container">
      <img src={Img1} alt="logotipo salt" />
      <main className="main">
        <h2><a href="http://saltinfo.no-ip.com:7788">Auditoria</a></h2>
        <h2><a href="https://cep.salthomol.com.br">BuscaCEP</a></h2>
        <h2><a href="https://homolcheckin.siegestao.com.br/checkindemo">Checkin Demonstracao</a></h2>
        <h2><a href="https://homolcheckin.siegestao.com.br/recepcheckindemo">Checkin Recep Demonstracao</a></h2>
        <h2><a href="https://homolcheckin.siegestao.com.br/hpfhomol">Checkin HPF Homol</a></h2>
        <h2><a href="https://homolcheckin.siegestao.com.br/recephpfhomol">Checkin Recep HPF Homol</a></h2>
        <h2><a href="http://saltinfo.no-ip.com:8080">Gestao 1a versao</a></h2>
        <h2><a href="http://siegestao.com.br/gestaodemo">Gestao Demonstracao</a></h2>
        <h2><a href="http://siegestao.com.br/catarinahomol">Gestao Catarina Homol</a></h2>
        <h2><a href="http://siegestao.com.br/bioluxhomol">Gestao Biolux Homol</a></h2>
        <h2><a href="https://suporte.salthomol.com.br">Suporte</a></h2>
      </main>
  </div>
  );
}

export default App;
