import './Pe.css'
import Aviao from './assets/Aviao.png'
import Enfeite2 from './assets/Enfeite2.png'
import Enfeite3 from './assets/Enfeite3.png'

function App() {

  return (
    <>
    <img src={Enfeite3} className="enfeite3"/>
      <div className="fundo">
          <h2>Envio de Dados</h2>
          <p>Suas informações e dados 
já foram enviadas para um profissional, aguarde o seu 
plano.</p>
          <img src={Aviao}/>
          <button>Voltar</button>
      </div>
      <img src={Enfeite2} className='enfeite2'/>
    </>
  )
}

export default App
