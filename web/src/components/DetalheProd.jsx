import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const getDetalheProduto = (id) => {
    const detalhes = {
        1: {
            id: 1,
            name: "Placa de Vídeo",
            price: 3200.00,
            description: "Placa de vídeo de gama média alta (ex: RTX 4060) para jogos em Full HD/QHD e tarefas de renderização com excelente desempenho."
        },
        2: {
            id: 2,
            name: "Processador",
            price: 850.00,
            description: "CPU de performance intermediária (ex: Ryzen 5 ou Core i5) para multitarefas e jogos, oferecendo um bom equilíbrio entre custo e performance."
        },
        3: {
            id: 3,
            name: "Processador High-End",
            price: 3500.00,
            description: "CPU de alto desempenho (ex: Ryzen 9 ou Core i9) com múltiplos núcleos para aplicações profissionais, renderização pesada e jogos em 4K."
        },
        4: {
            id: 4,
            name: "Memória RAM",
            price: 400.00,
            description: "Módulo de memória RAM de 16GB (2x8GB) DDR4 ou DDR5 com alta frequência para garantir fluidez e velocidade no sistema e em jogos."
        },
        5: {
            id: 5,
            name: "Armazenamento SSD NVMe",
            price: 550.00,
            description: "SSD M.2 NVMe de 1TB, essencial para boot ultrarrápido do sistema operacional e carregamento instantâneo de programas e jogos."
        },
        6: {
            id: 6,
            name: "Placa-Mãe",
            price: 700.00,
            description: "Placa-mãe de nível intermediário com suporte a recursos atuais (PCIe 4.0/5.0) e compatível com os processadores mais recentes."
        },
        7: {
            id: 7,
            name: "Fonte de Alimentação",
            price: 450.00,
            description: "Fonte de 650W com certificação 80 Plus Bronze ou Gold, garantindo eficiência e segurança para o fornecimento de energia ao PC."
        },
        8: {
            id: 8,
            name: "Notebook para Trabalho (Geral)",
            price: 2800.00,
            description: "Notebook com Core i3/i5 ou Ryzen 3/5, 8GB de RAM e SSD de 256GB, ideal para navegação, estudo e tarefas de escritório."
        },
        9: {
            id: 9,
            name: "Notebook Avançado (Profissional)",
            price: 6500.00,
            description: "Notebook com Core i7/Ryzen 7, 16GB RAM e placa de vídeo dedicada (ex: RTX 4050), voltado para edição de vídeo/foto e programação."
        },
        10: {
            id: 10,
            name: "Notebook Gamer (Custo-Benefício)",
            price: 4800.00,
            description: "Notebook com Core i5 ou Ryzen 5, 8GB/16GB RAM e placa de vídeo básica para jogos (ex: RTX 3050), com tela de 144Hz."
        },
        11: {
            id: 11,
            name: "PC Desktop (Montagem Customizada)",
            price: 400.00,
            description: "Serviço de montagem e configuração personalizada de um PC desktop, otimizando componentes para o uso específico do cliente."
        },
        12: {
            id: 12,
            name: "Mini PC / Thin Client",
            price: 1500.00,
            description: "Computador compacto e de baixo consumo, ideal para tarefas simples, home office básico ou como terminal de acesso a servidores."
        },
        13: {
            id: 13,
            name: "Monitor Profissional",
            price: 1300.00,
            description: "Monitor de 24''/27'' com painel IPS, resolução 2K ou 4K e alta fidelidade de cores (sRGB/Adobe RGB) para designers e editores."
        },
        14: {
            id: 14,
            name: "Monitor Gamer",
            price: 1400.00,
            description: "Monitor de 24''/27'' com alta taxa de atualização (144Hz ou superior) e baixo tempo de resposta (1ms), essencial para jogos competitivos."
        },
        15: {
            id: 15,
            name: "Kit Teclado e Mouse Sem Fio",
            price: 150.00,
            description: "Conjunto básico sem fio, ideal para uso em escritório ou casa, oferecendo praticidade e organização na mesa."
        },
        16: {
            id: 16,
            name: "Teclado Mecânico (Gamer/Programador)",
            price: 350.00,
            description: "Teclado com switches mecânicos de alta durabilidade e resposta tátil, preferido por gamers e programadores que buscam precisão."
        },
        17: {
            id: 17,
            name: "Webcam Full HD",
            price: 180.00,
            description: "Webcam com resolução 1080p, ideal para videoconferências nítidas, aulas online e streaming casual."
        },
        18: {
            id: 18,
            name: "Headset Gamer",
            price: 250.00,
            description: "Headset com microfone de qualidade e áudio imersivo (geralmente surround), focado em conforto para longas sessões de jogo."
        },
        19: {
            id: 19,
            name: "Roteador Wi-Fi",
            price: 300.00,
            description: "Roteador Dual Band (2.4GHz e 5GHz) com tecnologia Wi-Fi 6 (802.11ax), melhorando a velocidade e o alcance da rede doméstica."
        },
        20: {
            id: 20,
            name: "Nobreak",
            price: 600.00,
            description: "Nobreak de 700VA/1000VA com bateria, fornecendo energia temporária para desligamento seguro do equipamento em caso de queda de luz."
        },
    };

    return detalhes[id];
}

function DetalheProd() {
    const { id } = useParams();
    const navigate = useNavigate();
    const prod = getDetalheProduto(id);

    if (!prod) {
        return (
            <div>
                <h1>Produto Não Encontrado</h1>
                <button onClick={() => navigate('/')}>Voltar à Lista</button>
            </div>
        );
    }

    return (
        <div className="container">
            <h1>{prod.name}</h1>
            <h3>Detalhes do Produto</h3>

            <div className="produto-card">
                <div className="info">
                    <span className="label">Código:</span>
                    <span className="valor">{prod.id}</span>
                </div>

                <div className="info preco">
                    <span className="label">Preço:</span>
                    <span className="valor">R$ {prod.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>

                <div className="descricao">
                    <span className="label">Descrição:</span>
                    <p>{prod.description}</p>
                </div>
            </div>

            <button onClick={() => navigate('/')}>Voltar para a Lista</button>
        </div>
    );
}

export default DetalheProd;
