import React from "react";
import { useState } from "react";
import Modal from "./Components/Modal";

import './modal.css'

 const Modal1 = ({ data }) => {

   const [modal, setModal] = useState(false);

   return (
     <div className="table-function">
        {modal ? (
         <div className="modal">
           <Modal setModal={setModal} data={data} />
         </div>
       ) : (
         <div className="table-container">
           <div className="div-button">
             <h1>Tabela de funcionarios</h1>
             <button className="btnAdd" onClick={() => setModal(true)}>
               Adicionando novo funcionario
             </button>
           </div>
           <table>
             <thead>
               <tr>
                 <th>id</th>
                 <th>Nome</th>
                 <th>Profissão</th>
                 <th>Salário</th>
               </tr>
             </thead>
             <tbody>
               {data.map((usuario) => (
                 <tr className="trInitial" key={usuario.id}>
                   <td>{usuario.id}</td>
                   <td>{usuario.nome}</td>
                   <td>{usuario.profissao}</td>
                   <td>{usuario.salario}</td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       )} 
     </div>
   );
 };

export default Modal1;
