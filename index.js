// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


// implementação
console.log('****SISTEMA DE CONTROLE ESCOLAR****');

// ## ADICIONAR ALUNOS ##
/*
  Essa função irá receber uma *string* que é nome do aluno a ser criado. 
  E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
  A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.
 
  function adicionarAluno(nome:string)
 */
let adicionarAluno = nomeAluno => {
    alunosDaEscola.push({nome: nomeAluno, notas: [], cursos: [], faltas: 0});
    console.log(`Aluno ${nomeAluno} adicionado com sucesso!`)
};

// ## TESTE ##
// adicionarAluno('Rafael');
 // ^ FIM ADICIONAR ALUNOS

// ## LISTAR ALUNOS ##====================================================================================
/*
  Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
  Vale dizer que As informações deverão ser exibidas em um formato amigável.
*/
let listarAlunos = () => {
    console.log('***LISTANDO ALUNOS CADASTRADOS***')
    alunosDaEscola.map((aluno) => {
        var listaCursos = aluno.cursos.map( (cursos) => {
            return cursos.nomeDoCurso
        });
    console.log('------------------');
    console.log('Nome: ' + aluno.nome);
    console.log('Notas: ' + aluno.notas);
    console.log(`Cursos: ${listaCursos.join(', ')}`)
    console.log('Faltas: ' + aluno.faltas);
    });
};
// ## TESTE ##
// listarAlunos();

// ^ FIM LISTAR ALUNOS====================================================================================

// ## BUSCAR ALUNOS ##====================================================================================
/*
  Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno.
*/
let buscarAluno = (aluno) => {
    var encontrar = alunosDaEscola.filter(alunoBuscado => alunoBuscado.nome == aluno)
    if (encontrar.length > 0) {
        let objAluno = encontrar[0];
        var listaCursos = objAluno.cursos.map( (cursos) => {
            return cursos.nomeDoCurso
        });
        console.log(`Buscando aluno ${aluno}...`)
        console.log(`Aluno ${aluno} encontrado:`)
        console.log(`Nome: ${objAluno.nome}`);
        console.log(`Notas: ${objAluno.notas}`);
        console.log(`Cursos: ${listaCursos.join(', ')}`)
        console.log(`Faltas: ${objAluno.faltas}`);
    } else {
        console.log(`Aluno ${aluno} não encontrado.`)
    }
}

// ## TESTE ##
// buscarAluno('Henrique');

// ^ FIM BUSCAR ALUNOS=======================================================================================

// ## MATRICULAR ALUNOS ##====================================================================================
/*
  Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
  Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
  Lembre-se de exibir o feedback para o usuário.
*/

let matricularAluno = (aluno, curso) => {

    matriculadoEm = new Date();

var arrayAluno = alunosDaEscola.filter(buscado => buscado.nome == aluno);
switch(arrayAluno.length) {
    case 0:
        console.log(`Aluno ${aluno} não encontrado.`)
        break;
    case 1:
        arrayAluno[0].cursos.push({nomeDoCurso: curso, dataMatricula: matriculadoEm})
        console.log(`Aluno ${aluno} matriculado no curso ${curso} com sucesso!`)
        break;
    default:
        console.log(`FALHA! ==> Aluno ${aluno} tem cadastro duplicado.`)

}
}
// ## TESTE ##
// matricularAluno("Lucca", "Design");

// ^ FIM MATRICULAR ALUNOS==================================================================================

//   ## APLICAR FALTA ##====================================================================================
/*
   Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
*/

// ^ FIM APLICAR FALTA=====================================================================================

//   ## APLICAR NOTA ##====================================================================================
/*
   Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
*/

  // ^ FIM APLICAR NOTA====================================================================================
  
//   ## APROVAR ALUNO ##====================================================================================
/* 
   Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
   Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
*/

  // ^ FIM APROVAR ALUNO===================================================================================