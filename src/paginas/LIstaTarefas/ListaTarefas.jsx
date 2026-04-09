import "./ListaTarefas.css";
import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import { FaTrashAlt } from "react-icons/fa";

function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") {
      alert("Digite uma tarefa para adicionar!");
      return;
    }

    setTarefas([{ concluida: false, descricao: novaTarefa }, ...tarefas]);
    setNovaTarefa("");
  };

  const removerTarefa = (indice) => {
    if (confirm("Tem certeza que deseja remover esta tarefa?")) {
      tarefas.splice(indice, 1);
      setTarefas([...tarefas]);
    }
  };

  const marcarComoConcluida = (indice) => {
    tarefas[indice].concluida = !tarefas[indice].concluida;
    setTarefas([...tarefas]);
  };


  return (
    <Principal voltarPara="/" titulo={`Lista de Tarefas (${tarefas.length})`}>

        <CampoCustomizado
          label="Nova Tarefa"
          //propriedades não mapeadas
          id="nova-tarefa"
          type="text"
          placeholder="Precione Enter para adicionar"
          value={novaTarefa}
          onChange={(event) => setNovaTarefa(event.target.value)}
          onKeyPress={(event) => {
            if (event.code === "Enter") {
              adicionarTarefa();
            }
          }}
        />

        {/* <BotaoCustomizado tipo="secundario" aoClicar={adicionarTarefa}>
          +
        </BotaoCustomizado> */}
      

      {!tarefas.length && (<span className="lista-tarefas__mensagem-sem-tarefas">Não há tarefas para mostrar.</span>)}

      {tarefas.map((item, indice) => {
        return (
          <div key={indice} className="lista-tarefas__tarefa">
            <input
              type="checkbox"
              checked={item.concluida}
              onChange={() => marcarComoConcluida(indice)}
            />
            <span style={{ textDecoration: item.concluida ? 'line-through' : 'none' }}>
              {item.descricao}
            </span>
            <FaTrashAlt onClick={() => removerTarefa(indice)} />
          </div>
        );
      })}
    </Principal>
  );
}

export default ListaTarefas;