const basic = document.querySelector('#basic');
const pro = document.querySelector('#pro');
const premium = document.querySelector('#premium');
const convertPrices = async (value) => {
  const BASIC = 0;
  const PRO = 25;
  const PREMINUM = 60;

  let basicOp = 0;
  let proOp = 0;
  let premiumOp = 0;
  const URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies';
  try {
    const response = await fetch(`${URL}/eur.json`);

    if (!response.ok) return;

    const data = await response.json();

    const { eur, usd, gbp } = data.eur;
    if (value === 'eur') {
      // TO EUR
      basicOp = (BASIC / usd).toFixed(0);
      proOp = (PRO / usd).toFixed(0);
      premiumOp = (PREMINUM / usd).toFixed(0);
      basic.textContent = `€ ${basicOp}`;
      pro.textContent = `€ ${proOp}`;
      premium.textContent = `€ ${premiumOp}`;
      return;
    }
    if (value === 'gbp') {
      // TO EUR
      basicOp = (BASIC * gbp).toFixed(0);
      proOp = (PRO * gbp).toFixed(0);
      premiumOp = (PREMINUM * gbp).toFixed(0);
      basic.textContent = `£ ${basicOp}`;
      pro.textContent = `£ ${proOp}`;
      premium.textContent = `£ ${premiumOp}`;
      return;
    }
    basicOp = BASIC;
    proOp = PRO;
    premiumOp = PREMINUM;
    basic.textContent = `$ ${basicOp}`;
    pro.textContent = `$ ${proOp}`;
    premium.textContent = `$ ${premiumOp}`;
  } catch (error) {
    console.log(error);
  }
};

export default convertPrices;
