const studentForm = document.getElementById('student-form');
const studentButton = document.getElementById('student-button');
const ic = document.getElementById('ic');
const tahap = document.getElementById('tahap');
const student = document.getElementById('student');
const sekolah = document.getElementById('sekolah');
const emel = document.getElementById('emel');




const validateInputs = () => {
  const icValue = ic.value.trim();
  const tahapValue = tahap.value.trim();
  const studentValue = student.value.trim();
  const sekolahValue = sekolah.value.trim();
  const emelValue = emel.value.trim();

  if(icValue === '') {
    setError(ic, 'Kad pengenalan perlu diisi');
  }
  else {
    setSuccess(ic);
  }
  if(tahapValue === '') {
    setError(tahap, 'Tahap perlu diisi');
  }
  else {
    setSuccess(tahap);
  }
  if(studentValue === '') {
    setError(student, 'Nama pelajar perlu diisi');
  }
  else {
    setSuccess(student);
  }
  if(sekolahValue === '') {
    setError(sekolah, 'Nama sekolah perlu diisi');
  }
  else {
    setSuccess(sekolah);
  }
  if(emelValue === '') {
    setError(emel, 'Emel perlu diisi');
  }
  else {
    setSuccess(emel);
  }
}

const setError = (element, message) => {

  const inputControl = element.parentElement;
  const parentInput = inputControl.parentElement;
  const errorDisplay = inputControl.querySelector('.error-message');

  errorDisplay.innerText = message;
  parentInput.classList.add('error');
  parentInput.classList.remove('success');

}

const setSuccess = (element) => {

  const inputControl = element.parentElement;
  const parentInput = inputControl.parentElement;
  const errorDisplay = inputControl.querySelector('.error-message');

  errorDisplay.innerText = '';
  parentInput.classList.add('success');
  parentInput.classList.remove('error');


}


studentForm.addEventListener('submit', function(e) {
e.preventDefault();

validateInputs();
})






