$(document).ready(function () {
    let atividades = [];
    $('form').on('submit', function (event) {
        event.preventDefault();

        const novaAtividade = $('#nova-atividade').val();
        if (atividades.includes(novaAtividade)) {
            alert(`A tarefa ${novaAtividade} já está cadastrada`);
        } else {
            const novoItemLista = $('<li style="display:none;"></li>');
            $(`
            <div>
            ${novaAtividade}
            </div>
            `).appendTo(novoItemLista);
            $(novoItemLista).appendTo('ul');
            $('li').on('click', function () {
                $(this).toggleClass("feita");
            })
            $(novoItemLista).slideDown();
        }
        $('#nova-atividade').val('');

        atividades.push(novaAtividade);
    })

})