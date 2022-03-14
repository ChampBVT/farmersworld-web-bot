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
    const energyCondition = 200;

    const foodFill = 40;

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

        const foodInputCount = parseInt(document.querySelector('input.modal-input').value, 10);

        const foodsToAdd = (foodFill * 5 - foodInputCount) / 5;

        for (let i = 0; i < foodsToAdd; i += 1) {
          console.log('energy click');
          document.querySelector("img.image-button[alt='Plus Icon']").click();
          await utils.pause(200);
        }

        console.log('modal-wrapper click');
        document.querySelector('.modal-wrapper .plain-button').click();

        await utils.pause(2e4);
      }
    }
    // --------------- Energy ---------------

    for (const item of document.querySelectorAll('.vertical-carousel-container img')) {
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
          )?.click();
        }
      }
    }

    await utils.pause(1e3);
  } catch (error) {
    console.error(error);
    await utils.pause(1e3);
  }
}

(async () => {
  while (true) await farmersWorldBot();
})();
