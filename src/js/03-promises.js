const refs = {
  delay: document.querySelector('.delay'),
  step: document.querySelector('.step'),
  amount: document.querySelector('.amount'),
  btn: document.querySelector('.btn')
}
refs.btn.addEventListener('click', onBtnStart)

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
  
      if (shouldResolve) {
          resolve({ position, delay })
      } else {
        reject({position, delay})
      } 
     }, refs.delay.value)
  })
}

function onBtnStart(evt) {
    evt.preventDefault();

    const numberDelay = Number(refs.delay.value);
    const numberStep = Number(refs.step.value);

  for (let i = 0; i < refs.amount.value; i++) {
    createPromise(1 + i, numberDelay + i * numberStep)  
      .then(({ position, delay }) => {
      console.log(
        `✅ Fulfilled promise ${position} in ${delay}ms`
      );
    })
        .catch(({ position, delay }) => {
          console.log(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
    } 
};



