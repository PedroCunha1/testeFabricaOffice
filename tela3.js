const handlePhone = (event) => {
  let input = event.target;
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g,'');
  value = value.replace(/(\d{2})(\d)/,"($1) $2");
  value = value.replace(/(\d)(\d{4})$/,"$1-$2");
  return value;
  }

const preencherForm = (endereco) =>{
document.getElementById('cidade1').value = endereco.localidade;
document.getElementById('estado1').value = endereco.uf;
document.getElementById('logradouro1').value = endereco.logradouro;
document.getElementById('bairro1').value = endereco.bairro;

}  
const pesquisarCep = async() => {
  const cep = document.getElementById('cep1').value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  const dadosCep = await fetch(url)
  const endereco = await dadosCep.json();
  if(endereco.hasOwnProperty('erro')){
    setError(2);
    limparEnderenço();
  }else{
    removerErro(2);
    preencherForm(endereco);
  }
}
function validarCep(){
  if(campos[3].value.length < 8){
    setError(3);
    limparEnderenço();
  }else{
    pesquisarCep();
  }
}
function limparEnderenço(){
  document.getElementById('cep1').value = "";
  document.getElementById('cidade1').value = "";
  document.getElementById('estado1').value = "";
  document.getElementById('logradouro1').value = "";
  document.getElementById('bairro1').value = "";
  document.getElementById('numero1').value = "";
} 

document.getElementById('cep1').addEventListener('focusout',validarCep);

const form = document.getElementById('form1');
const campos = document.querySelectorAll('.inputUser1');
const spans = document.querySelectorAll('.spanRequired1');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function setError(index){
  spans[index].style.display = 'block';
}

function removerErro(index){
  spans[index].style.display = 'none';
}

function validarNome(){
if(campos[0].value.length < 3){
  setError(0); 
}else{
  removerErro(0)
}
}

function validarTel(){
  if(campos[1].value.length<15){
    setError(1);
  }else{
    removerErro(1);
  }
}

function validarEmail(){
  if(!emailRegex.test(campos[2].value)){
    setError(2);
  }else{
    removerErro(2);
  }
}

document.getElementById('nomeCliente1').addEventListener('focusout',validarNome);
document.getElementById('telefoneCliente1').addEventListener('focusout',validarTel);
document.getElementById('emailCliente1').addEventListener('focusout',validarEmail);