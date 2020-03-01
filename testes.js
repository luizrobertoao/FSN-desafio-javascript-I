
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},
{nome:"Henrique",notas:[],cursos:[],faltas:5},
{nome:"Edson",notas:[],cursos:[],faltas:2},
{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}, {nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
{nome:"Carlos",notas:[],cursos:[],faltas:0},
{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


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

matricularAluno('Henrique', 'Design');