class Shop {
  constructor(items = []){
    this.items = items;
  }

  updateQuality() {
    for (let item of this.items) {
      if (item.name.includes('Sulfuras')) return;
      if (item.name.includes('Aged Brie')) { this.updateAgedBrie(item); return };
      if (item.name.includes('Backstage')) { this.updateBackstagePass(item); return };
      if (item.name.includes('Conjured')) { this.updateConjuredItem(item); return };
      this.updateBasicItem(item);
    };
  };

  updateBasicItem(item) {
    if (item.sellIn > 0) {
      item.sellIn -= 1, item.quality -= 1;
    } else {
      item.quality -= 2;
    };
    this.minQuality(item);
  };

  updateAgedBrie(item) {
    if (item.sellIn > 0) {
      item.sellIn -= 1, item.quality += 1;
    } else {
      item.quality += 2;
    };
    this.maxQuality(item);
  };

  updateBackstagePass(item) {
    if (item.sellIn === 0) { item.quality = 0; return };
    item.quality += 1;
    if (item.sellIn < 6) {
      item.quality += 2;
    } else if (item.sellIn < 11) {
      item.quality += 1;
    };
    item.sellIn -= 1;
    this.maxQuality(item)
  };

  updateConjuredItem(item) {
    if (item.quality < 50) {
      if (item.sellIn > 0) {
        item.sellIn -= 1, item.quality -= 2;
      } else {
        item.quality -= 4;
      };
    };
    this.minQuality(item)
  };

  minQuality(item) {
    if (item.quality < 0) item.quality = 0;
  };

  maxQuality(item) {
    if (item.quality > 50) item.quality = 50;
  };

};

// for (var i = 0; i < this.items.length; i++) {
//   if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//     if (this.items[i].quality > 0) {
//       if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//         this.items[i].quality = this.items[i].quality - 1;
//       }
//     }
//   } else {
//     if (this.items[i].quality < 50) {
//       this.items[i].quality = this.items[i].quality + 1;
//       if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
//         if (this.items[i].sellIn < 11) {
//           if (this.items[i].quality < 50) {
//             this.items[i].quality = this.items[i].quality + 1;
//           }
//         }
//         if (this.items[i].sellIn < 6) {
//           if (this.items[i].quality < 50) {
//             this.items[i].quality = this.items[i].quality + 1;
//           }
//         }
//       }
//     }
//   }
//   if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//     this.items[i].sellIn = this.items[i].sellIn - 1;
//   }
//   if (this.items[i].sellIn < 0) {
//     if (this.items[i].name != 'Aged Brie') {
//       if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//         if (this.items[i].quality > 0) {
//           if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//             this.items[i].quality = this.items[i].quality - 1;
//           }
//         }
//       } else {
//         this.items[i].quality = this.items[i].quality - this.items[i].quality;
//       }
//     } else {
//       if (this.items[i].quality < 50) {
//         this.items[i].quality = this.items[i].quality + 1;
//       }
//     }
//   }
// }
//
// return this.items;
// }
