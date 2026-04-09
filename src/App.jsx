import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";
import CadastroCliente from "./paginas/CadastroCliente/CadastroCliente";
import ListaProdutos from "./paginas/ListaProdutos/ListaProdutos";
import ListaTarefas from "./paginas/LIstaTarefas/ListaTarefas";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";

const router = createBrowserRouter([
 {
   path: '',
   element: <PaginaInicial />,
 },
 {
        path: 'lista-produtos',
        element: <ListaProdutos />,
},
  {
        path: 'lista-tarefas',
        element: <ListaTarefas />,
},

{
    path: "cadastro-cliente",
    element: <CadastroCliente />,
},

{
  path: "*",
  element: <h1>Página Não Encontrada</h1>,
}
]);




function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={router} />
      <Rodape /> 
    </>
  );
}

export default App;
