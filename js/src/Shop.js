class Shop {
  constructor(items = []){
    this.items = items;
  };

  updateQuality() {
    for (let item of this.items) {
      if (item.name.includes('Sulfuras')) {
        return;
      } else if (item.name.includes('Aged Brie')) {
          this.updateAgedBrie(item);
      } else if (item.name.includes('Backstage')) {
          this.updateBackstagePass(item);
      } else if (item.name.includes('Conjured')) {
          this.updateConjuredItem(item);
      } else {
        this.updateBasicItem(item);
      };
      item.sellIn -= 1;
    };
  };

  updateBasicItem(item) {
    (item.sellIn > 0) ? item.quality -= 1 : item.quality -= 2;
    this.qualityChecker(item);
  };

  updateAgedBrie(item) {
    (item.sellIn > 0) ? item.quality += 1 : item.quality += 2;
    this.qualityChecker(item);
  };

  updateBackstagePass(item) {
    if (item.sellIn < 1) { item.quality = 0; return };
    item.quality += 1;
    if (item.sellIn < 11) item.quality += 1;
    if (item.sellIn < 6) item.quality += 1;
    this.qualityChecker(item);
  };

  updateConjuredItem(item) {
    (item.sellIn > 0) ? item.quality -= 2 : item.quality -= 4;
    this.qualityChecker(item);
  };

  minQuality(item) {
    if (item.quality < 0) item.quality = 0;
  };

  maxQuality(item) {
    if (item.quality > 50) item.quality = 50;
  };

  qualityChecker(item) {
    this.minQuality(item);
    this.maxQuality(item);
  }

};
