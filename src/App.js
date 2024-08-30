import { useState } from 'react';
import Formulario from './componentes/Formulario';
import Banner from './componentes/banner';
import Time from './componentes/Time';
import Rodape from './componentes/rodape';

function App() {
  const times = [
    {
      nome: 'Programação',
      corSecundaria: '#D9F7E9',
      corPrimaria: '#57C278',
    },

    {
      nome: 'Front-End',
      corSecundaria: '#E8F8FF',
      corPrimaria: '#82CFFA',
    },
    {
      nome: 'Data Science',
      corSecundaria: '#F0F8E2',
      corPrimaria: '#A6D157',
    },
    {
      nome: 'Devops',
      corSecundaria: '#FDE7E8',
      corPrimaria: '#E06B69',
    },
    {
      nome: 'UX e Design',
      corSecundaria: '#FAE9F5',
      corPrimaria: '#DB6EBF',
    },
    {
      nome: 'Mobile',
      corSecundaria: '#FFF5D9',
      corPrimaria: '#FFBA05',
    },
    {
      nome: 'Inovação e Gestão',
      corSecundaria: '#FFEEDF',
      corPrimaria: '#FF8A29',
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
