
/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, 
apenas faça. Essa exibição de pontos é uma das implementações que faremos 
na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, 
busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que 
vimos até aqui.

O uso do Bootstrap ou qualquer biblioteca CSS é opcional. Porém, eu recomendo 
que nesse momento, ao invés de focar em CSS, você foque em desenvolver a 
lógica da aplicação com o JavaScript. Em um momento futuro, você pode voltar 
e melhorar a estilização da aplicação. 
*/


const form = document.querySelector('.myForm')
const correctQuestions = ['A', 'B', 'B', 'D', 'A']
const result = document.querySelector('.result')


form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0

    const inQuests = [
        form.quest1.value,
        form.quest2.value,
        form.quest3.value,
        form.quest4.value,
        form.quest5.value,
    ]


    inQuests.forEach((inQuests, index) => {
        if (inQuests === correctQuestions[index]) {
            score += 25
        }
    })

    scrollTo(0, 0)

    result.classList.remove('d-none')

    let conter = 0

    const inTime = setInterval(() => {
        if (conter === score) {
            clearInterval(inTime)
        }
        result.querySelector('span').textContent = `${conter}%`
        conter++
    }, 10)
})