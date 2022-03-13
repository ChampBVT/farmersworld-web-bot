let isRunning = false;

const utils = {
  async pause(duration) {
    return new Promise((res) => {
      setTimeout(res, duration);
    });
  },
};

async function farmersWorldBot() {
  try {
    const autoFillEnergy = 1;
    const autoRepair = 1;

    const repairItem = 50;
    const energyCondition = 300;

    const foodFill = 20;

    // --------------- Energy ---------------
    if (autoFillEnergy) {
      const currentEnergy = parseInt(
        document.querySelectorAll('.resource-number div')[3].innerText,
        10,
      );
      const currentFish = parseInt(document.querySelectorAll('.resource-number')[2].innerText, 10);

      if (currentEnergy <= energyCondition && currentFish >= foodFill) {
        document.querySelector('.resource-energy img').click();
        await utils.pause(1000);

        for (let i = 0; i < foodFill; i += 1) {
          console.log('energy click');
          document.querySelector("img.image-button[alt='Plus Icon']").click();
          await utils.pause(500);
        }

        console.log('modal-wrapper click');
        document.querySelector('.modal-wrapper .plain-button').click();

        await utils.pause(2e4);
      }
    }
    // --------------- Energy ---------------

    for (const [_, item] of document
      .querySelectorAll('.vertical-carousel-container img')
      .entries()) {
      item.click();

      await utils.pause(3e3);

      // --------------- Repair instruments ---------------
      if (autoRepair) {
        const buttonRepair = document.querySelectorAll('.info-section .plain-button')?.[1];

        const qualityBar = document.querySelector('.card-number')?.innerText.split('/ ');

        const quality = (qualityBar?.[0] || 1) / (qualityBar?.[1] || 1);

        if (
          quality &&
          buttonRepair &&
          ![...buttonRepair.classList].includes('disabled') &&
          quality <= repairItem / 100
        ) {
          buttonRepair.click();
          await utils.pause(10000);
        }
      }
      // --------------- Repair instruments ---------------

      const buttonMine = document.querySelector('.info-section .plain-button');

      if (
        ![...buttonMine.classList].includes('disabled') ||
        ['mine', 'claim', 'feed', 'water'].includes(buttonMine.innerHTML.toLocaleLowerCase())
      ) {
        const store = document.querySelector('.info-title-level');

        if (store?.textContent.charAt(2) === store?.textContent.charAt(0)) {
          console.log('buttonMine.click()');

          buttonMine.click();

          const d = new Date();

          console.log(`Mine at ${d.getHours()}:${d.getMinutes()}`);

          await utils.pause(10000);
          (
            document.querySelector('.modal__button-group .plain-button') ||
            document.querySelector('.modal-stake .modal-stake-close img')
          ).click();
        }
      }
    }

    await utils.pause(1e3);

    isRunning = false;
  } catch (error) {
    isRunning = false;
    console.log(error);
    await utils.pause(1e3);
  }
  isRunning = false;
}

let start = new Date();
setInterval(async () => {
  console.log('still running...');

  if (!isRunning) {
    console.log('search...');
    start = new Date();
    isRunning = true;
    farmersWorldBot();
  }

  const diff = Math.abs(start - new Date());
  let second = Math.floor(diff / 1000);

  if (second > 90) {
    console.log('overtime');
    isRunning = false;
    second = 0;
  }
}, 10000);
