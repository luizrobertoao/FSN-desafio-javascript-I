console.log('****SISTEMA DE CONTROLE ESCOLAR****');

const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];

let listarAlunos = () => {
    console.log('***LISTANDO ALUNOS CADASTRADOS***')
    alunosDaEscola.map((aluno) => {
    console.log('------------------');
    console.log('Nome: ' + aluno.nome);
    console.log('Notas: ' + aluno.notas);
    console.log('Cursos: ' + aluno.cursos);
    console.log('Faltas: ' + aluno.faltas);
    });
};
listarAlunos();