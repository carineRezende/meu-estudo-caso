import React from "react";
import { Link } from "react-router-dom";

const produtos = [
    { id: 1, name: "Placa de Vídeo" },
    { id: 2, name: "Processador" },
    { id: 3, name: "Processador High-End" },
    { id: 4, name: "Memória RAM" },
    { id: 5, name: "Armazenamento SSD NVMe" },
    { id: 6, name: "Placa-Mãe" },
    { id: 7, name: "Fonte de Alimentação" },
    { id: 8, name: "Notebook para Trabalho (Geral)" },
    { id: 9, name: "Notebook Avançado (Profissional)" },
    { id: 10, name: "Notebook Gamer (Custo-Benefício)" },
    { id: 11, name: "PC Desktop (Montagem Customizada)" },
    { id: 12, name: "Mini PC / Thin Client" },
    { id: 13, name: "Monitor Profissional" },
    { id: 14, name: "Monitor Gamer" },
    { id: 15, name: "Kit Teclado e Mouse Sem Fio" },
    { id: 16, name: "Teclado Mecânico (Gamer/Programador)" },
    { id: 17, name: "Webcam Full HD" },
    { id: 18, name: "Headset Gamer" },
    { id: 19, name: "Roteador Wi-Fi" },
    { id: 20, name: "Nobreak" },
];

function ListaProd() {
    return (
        <div className="container">
            <h1>Lead Tech Store</h1>
            <h2>Lista de Produtos</h2>
            <p>Clique em um produto para ver os detalhes:</p>
            <ul>
                {produtos.map(produto => (
                    <li key={produto.id} style={{ marginBottom: '10px' }}>
                        <Link to={`/produto/${produto.id}`}>
                            {produto.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaProd;