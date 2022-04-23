const utils = {
  async pause(duration: number) {
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
        (<NodeListOf<HTMLElement>>document.querySelectorAll('.resource-number div'))[3].innerText,
        10,
      );
      const currentFish = parseInt(
        (<NodeListOf<HTMLElement>>document.querySelectorAll('.resource-number'))[2].innerText,
        10,
      );

      if (currentEnergy <= energyCondition && currentFish >= foodFill) {
        (<HTMLElement>document.querySelector('.resource-energy img'))?.click();
        await utils.pause(1000);

        const foodInputCount = parseInt(
          (<HTMLInputElement>document.querySelector('input.modal-input'))?.value,
          10,
        );

        const foodsToAdd = (foodFill * 5 - foodInputCount) / 5;

        for (let i = 0; i < foodsToAdd; i += 1) {
          console.log('energy click');
          (<HTMLElement>document.querySelector("img.image-button[alt='Plus Icon']"))?.click();
          await utils.pause(200);
        }

        console.log('modal-wrapper click');
        (<HTMLElement>document.querySelector('.modal-wrapper .plain-button')).click();

        await utils.pause(2e4);
      }
    }
    // --------------- Energy ---------------

    for (const item of Array.from(
      <NodeListOf<HTMLElement>>document.querySelectorAll('.vertical-carousel-container img'),
    )) {
      item.click();

      await utils.pause(3e3);

      // --------------- Repair instruments ---------------
      if (autoRepair) {
        const buttonRepair = <HTMLElement>(
          document.querySelectorAll('.info-section .plain-button')?.[1]
        );

        const qualityBar = (<HTMLElement>document.querySelector('.card-number'))?.innerText.split(
          '/ ',
        );

        const quality = (Number(qualityBar?.[0]) || 1) / (Number(qualityBar?.[1]) || 1);

        if (
          quality &&
          buttonRepair &&
          ![...Array.from(buttonRepair.classList)].includes('disabled') &&
          quality <= repairItem / 100
        ) {
          buttonRepair.click();
          await utils.pause(10000);
        }
      }
      // --------------- Repair instruments ---------------

      const buttonMine = <HTMLElement>document.querySelector('.info-section .plain-button');

      if (
        ![...Array.from(buttonMine?.classList || [])].includes('disabled') ||
        ['mine', 'claim', 'feed', 'water'].includes(buttonMine?.innerHTML.toLocaleLowerCase())
      ) {
        const store = document.querySelector('.info-title-level');

        if (store?.textContent?.charAt(2) === store?.textContent?.charAt(0)) {
          console.log('buttonMine.click()');

          buttonMine.click();

          const d = new Date();

          console.log(`Mine at ${d.getHours()}:${d.getMinutes()}`);

          await utils.pause(10000);
          (
            <HTMLElement>document.querySelector('.modal__button-group .plain-button') ||
            <HTMLElement>document.querySelector('.modal-stake .modal-stake-close img')
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
