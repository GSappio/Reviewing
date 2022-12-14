import React from "react";
import { useState } from 'react';

const Modal = ({ setModal, data }) => {
  
  const [func, setFunc] = useState({
      nome: '',
      profissao: '',
      salario: 0,
  }) 

  const addFunc = () => {
    
    if (func.nome === '' || func.profissao === '' || func.salario === 0) {
      alert("Preencha todos os campos.")
      return;
    }

    const novoFunc = {
      id: data.length + 1,
      nome: func.nome,
      profissao: func.profissao,
      salario: func.salario,
    }

    data.push(novoFunc);
    alert('Cadastro realizado com sucesso!');
    setModal(false);

  }

  return (
    <div className="modal">
      <div className="table-container">
        <div className="come-back-container">

          <button className="come-back-item" onClick={() => setModal(false)}>
            Voltar
          </button>

        </div>

        <div className="div-button">
          <h1>Adicionando novos funcionarios</h1>
        </div>

        <div className="container-input">
          <div className="div-input">
            <span>Nome</span>
            <input  type="text" 
                    placeholder="Nome" 
                    value={func.nome}
                    onChange={(e) => setFunc({ ...func, nome: e.target.value })}/>
          </div>

          <div className="div-input">
            <span>Profissao</span>
            <input  type="text" 
                    placeholder="Profissao" 
                    value={func.profissao}
                    onChange={(e) => setFunc({ ...func, profissao: e.target.value })} />
          </div>

          <div className="div-input">
            <span>Salario</span>
            <input  type="number" 
                    placeholder="Salario"
                    value={func.salario}
                    onChange={(e) => setFunc({ ...func, salario: e.target.value })} />
          </div>

          <div className="div-button">
            <button className="button-add" onClick={addFunc}>Adicionar</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Modal;
