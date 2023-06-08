const pause = (duration: number) => {
  return new Promise((res) => {
    setTimeout(res, duration);
  });
};

interface IFood {
  energyCondition: number;
  foodFill: number;
}

const food = async ({ energyCondition, foodFill }: IFood) => {
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
    await pause(1000);

    const foodInputCount = parseInt(
      (<HTMLInputElement>document.querySelector('input.modal-input'))?.value,
      10,
    );

    const foodsToAdd = (foodFill * 5 - foodInputCount) / 5;

    for (let i = 0; i < foodsToAdd; i += 1) {
      console.log('energy click');
      (<HTMLElement>document.querySelector("img.image-button[alt='Plus Icon']"))?.click();
      await pause(75);
    }

    (<HTMLElement>document.querySelector('.modal-wrapper .plain-button')).click();

    await pause(2e4);
  }
};

interface IRepair {
  repairItem: number;
}

const repair = async ({ repairItem }: IRepair) => {
  const buttonRepair = <HTMLElement>document.querySelectorAll('.info-section .plain-button')?.[1];

  const qualityBar = (<HTMLElement>document.querySelector('.card-number'))?.innerText.split('/ ');

  const quality = (Number(qualityBar?.[0]) || 1) / (Number(qualityBar?.[1]) || 1);

  if (
    quality &&
    buttonRepair &&
    ![...Array.from(buttonRepair.classList)].includes('disabled') &&
    quality <= repairItem / 100
  ) {
    buttonRepair.click();
    await pause(10000);
  }
};

const mine = async (isMine = true) => {
  const buttonMine = <HTMLElement>document.querySelector('.info-section .plain-button');

  if (
    ![...Array.from(buttonMine?.classList || [])].includes('disabled') ||
    ['mine', 'claim', 'feed', 'water', 'hatch'].includes(buttonMine?.innerHTML.toLocaleLowerCase())
  ) {
    const store = document.querySelector('.info-title-level');
    if (
      // Stacked mining
      store?.textContent?.charAt(2) === store?.textContent?.charAt(0) ||
      // Plant watering
      store?.textContent?.toLowerCase().includes('missed') ||
      // Chicken & Cow feeding
      !isMine
    ) {
      buttonMine.click();

      const d = new Date();

      console.log(`Mine at ${d.getHours()}:${d.getMinutes()}`);

      await pause(10000);

      (
        <HTMLElement>document.querySelector('.modal__button-group .plain-button') ||
        <HTMLElement>document.querySelector('.modal-stake .modal-stake-close img')
      )?.click();
    }
  }
};
async function farmersWorldBot(isMine = true) {
  const config = getConfig();

  try {
    const autoFillEnergy: boolean = config.autoFillEnergy;
    const autoRepair: boolean = config.autoRepair;
    const repairItem: number = config.repairItem;
    const energyCondition: number = config.energyCondition;
    const foodFill: number = config.foodFill;

    for (const item of Array.from(
      <NodeListOf<HTMLElement>>document.querySelectorAll('.vertical-carousel-container img'),
    )) {
      if (autoFillEnergy) await food({ energyCondition, foodFill });

      item.click();

      await pause(3e3);

      if (autoRepair && isMine) await repair({ repairItem });

      await mine(isMine);
    }

    await pause(1e3);
  } catch (error) {
    console.error(error);
    await pause(1e3);
  }
}

const mapIndex: Record<string, number> = {
  mine: 0,
  chicken: 1,
  plant: 2,
  cow: 3,
};

(async () => {
  while (true) {
    for (const [mapItem, enabled] of Object.entries(getConfig().maps)) {
      if (!enabled) continue;

      const mapBtn = document.getElementsByClassName('navbar-container')[0]
        .children[4] as HTMLElement;

      if (!Array.from(mapBtn.classList).includes('active')) mapBtn.click();

      await pause(3e3);

      const mapItemButton = document.getElementsByClassName('modal-map-content')[0].children[
        mapIndex[mapItem]
      ].children[0] as HTMLElement;

      // Skip if the map is greyed out
      if (mapItemButton.style.filter === 'grayscale(1)') continue;

      mapItemButton.click();

      await pause(3e3);

      await farmersWorldBot(mapIndex[mapItem] === 0);

      await pause(3e3);
    }
  }
})();

interface IGetConfig {
  maps: {
    mine: boolean;
    chicken: boolean;
    plant: boolean;
    cow: boolean;
  };
  autoFillEnergy: boolean;
  autoRepair: boolean;
  repairItem: number;
  energyCondition: number;
  foodFill: number;
}

/**
 * README: To config edit these values
 *
 * autoFillEnergy: Turn on/off auto evergy fill
 * autoRepair: Turn on/off auto tools repair
 * repairItem: Condition to start repair (out of 100)
 * energyCondition: Condition of current energy to fill
 * foodFill: Amount of food to fill
 */
function getConfig(): IGetConfig {
  return {
    maps: {
      mine: true,
      chicken: true,
      plant: true,
      cow: true,
    },
    autoFillEnergy: true,
    autoRepair: true,
    repairItem: 50,
    energyCondition: 200,
    foodFill: 40,
  };
}
