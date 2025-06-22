const entregas = [
    {
        id: 1,
        destinatario: "João Silva",
        endereco: "Rua A, 123",
        produto: 'Manual do Usuário',
        status: "Pendente",
        data: "2025-06-20",
        descricao: "Entrega de livros",
    },
    {
        id: 2,
        destinatario: "Maria Oliveira",
        endereco: "Avenida B, 456",
        produto: 'Guia de Instalação',
        status: "Entregue",
        data: "2025-06-21",
        descricao: "Entrega de manuais técnicos",
    },
    {
        id: 3,
        destinatario: "Carlos Pereira",
        endereco: "Travessa C, 789",
        produto: 'Catálogo de Produtos',
        status: "Pendente",
        data: "2025-06-22",
        descricao: "Entrega de catálogos promocionais",
    }
]

const listagem = document.getElementById("listagem");
const statusInput = document.getElementById("status");
const dataInput = document.getElementById("data");
const nomeInput = document.getElementById("nome");
const limparBtn = document.getElementById("limpar");

let filtros = {
    status: "",
    data: "",
    nome: ""
};

function atualizarLista() {
    const filtradas = entregas.filter(entrega => {
        const statusOK = !filtros.status || entrega.status.toLowerCase() === filtros.status.toLowerCase();
        const dataOK = !filtros.data || entrega.data === filtros.data;
        const nomeOK = !filtros.nome || entrega.destinatario.toLowerCase().includes(filtros.nome.toLowerCase());

        return statusOK && dataOK && nomeOK;
    });
    
    renderizarLista(filtradas);
}

function renderizarLista(lista) {
    listagem.innerHTML = "";

    if (lista.length === 0) {
        listagem.innerHTML = "<p>Nenhuma entrega encontrada.</p>";
        return;
    }

    const table = document.createElement("table");
    table.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Destinatário</th>
                <th>Endereço</th>
                <th>Produto</th>
                <th>Status</th>
                <th>Data</th>
                <th>Descrição</th>
            </tr>
        </thead>
        <tbody>
            ${lista.map(entrega => `
                <tr>
                    <td>${entrega.id}</td>
                    <td>${entrega.destinatario}</td>
                    <td>${entrega.endereco}</td>
                    <td>${entrega.produto}</td>
                    <td>${entrega.status}</td>
                    <td>${entrega.data}</td>
                    <td>${entrega.descricao}</td>
                </tr>`).join('')}
        </tbody>`;

    listagem.appendChild(table);
}

statusInput.addEventListener("change", () => {
    filtros.status = status.value;
    atualizarLista();
});

dataInput.addEventListener("change", () => {
    filtros.data = dataInput.value;
    atualizarLista();
});

nomeInput.addEventListener("input", () => {
    filtros.nome = nomeInput.value;
    atualizarLista();
});

limparBtn.addEventListener("click", () => {
    filtros = { status: "", data: "", nome: "" };
    statusInput.value = "";
    dataInput.value = "";
    nomeInput.value = "";
    atualizarLista();
});

document.addEventListener("DOMContentLoaded", () => {
    atualizarLista();
});