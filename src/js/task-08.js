document.querySelector('form.login-form').addEventListener('submit', e => {
  e.preventDefault();
  let summaryInfo = {};
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Все поля должны быть заполнены');
  }

  summaryInfo = {
    email: email.value,
    password: password.value,
  };
  console.log(summaryInfo);
  e.currentTarget.reset();
});
