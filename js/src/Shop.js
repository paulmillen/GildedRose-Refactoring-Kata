class Shop {

  constructor(items = [], itemTyper = new ItemTyper){
    this.items = items;
    this.itemTyper = itemTyper;
  };

  updateQuality() {
    for (let item of this.items) {
      this.itemTyper.update(item);
      item.sellIn -= 1;
      this.qualityChecker(item);
    };
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
  };
};
