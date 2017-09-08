class QualityGuide {
  
  constructor() {
  };

  basicItem(item) {
    (item.sellIn > 0) ? item.quality -= 1 : item.quality -= 2;
  };

  agedBrie(item) {
    (item.sellIn > 0) ? item.quality += 1 : item.quality += 2;
  };

  backstagePass(item) {
    if (item.sellIn < 1) { item.quality = 0; return };
    item.quality += 1;
    if (item.sellIn < 11) item.quality += 1;
    if (item.sellIn < 6) item.quality += 1;
  };

  conjuredItem(item) {
    (item.sellIn > 0) ? item.quality -= 2 : item.quality -= 4;
  };
};
