
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},
{nome:"Henrique",notas:[],cursos:[],faltas:5},
{nome:"Edson",notas:[],cursos:[],faltas:2},
{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}, {nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
{nome:"Carlos",notas:[],cursos:[],faltas:0},
{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];

let aplicarNota = (aluno, nota) => {
    for(let i = 0; i < alunosDaEscola.length; i++) {
        if(alunosDaEscola[i].nome == aluno) {
           var indexAluno = alunosDaEscola.indexOf(alunosDaEscola[i]);
        } else{
            var indexAluno = -1
        };
    };
    var checarDuplicidade = alunosDaEscola.filter(buscado => buscado.nome == aluno);
    switch(checarDuplicidade.length) {
       case 1:
            alunosDaEscola[indexAluno].notas.push(nota);
            console.log(`A nota ${nota} foi adicionada ao aluno ${aluno}.`)
            break;
       case 0: 
           console.log(`Aluno ${aluno}, não cadastrado no sistema.`)
           break;
       default:
           console.log(`FALHA! ==> Aluno ${aluno} tem cadastro duplicado.`) 
    };

};
   aplicarNota('Henrique', 5);



// let aplicarFalta = (aluno) => {
//      for(let i = 0; i < alunosDaEscola.length; i++) {
//          if(alunosDaEscola[i].nome == aluno) {
//             var indexAluno = alunosDaEscola.indexOf(alunosDaEscola[i]);
//          } else{
//              var indexAluno = -1
//          };
//      };
//      switch(indexAluno > 0) {
//         case true:
//              alunosDaEscola[indexAluno].faltas++;
//              console.log(`Foi adicionada uma falta ao aluno ${aluno}.`)
//              break;
//         default:
//             console.log(`Aluno ${aluno}, não cadastrado no sistema.`)
//      };

// };
//     aplicarFalta('Lucca');
    



// let matricularAluno = (aluno, curso) => {

//     matriculadoEm = new Date();

// var arrayAluno = alunosDaEscola.filter(buscado => buscado.nome == aluno);
// switch(arrayAluno.length) {
//     case 0:
//         console.log(`Aluno ${aluno} não encontrado.`)
//         break;
//     case 1:
//         arrayAluno[0].cursos.push({nomeDoCurso: curso, dataMatricula: matriculadoEm})
//         console.log(`Aluno ${aluno} matriculado no curso ${curso} com sucesso!`)
//         break;
//     default:
//         console.log(`FALHA! ==> Aluno ${aluno} tem cadastro duplicado.`)

// }
// }

// matricularAluno('Henrique', 'Design');