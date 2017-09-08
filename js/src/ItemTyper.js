class ItemTyper {

  constructor(qualityGuide = new QualityGuide){
    this.qualityGuide = qualityGuide;
  };

  update(item) {
    if (this.isSulfuras(item)) return;
    if (this.isAgedBrie(item)) { this.qualityGuide.agedBrie(item); return };
    if (this.isBackstagePass(item)) { this.qualityGuide.backstagePass(item); return };
    if (this.isConjuredItem(item)) { this.qualityGuide.conjuredItem(item); return };
    this.qualityGuide.basicItem(item);
  };

  isSulfuras(item) {
    return !!item.name.includes('Sulfuras');
  };

  isAgedBrie(item) {
    return !!item.name.includes('Aged Brie');
  };

  isBackstagePass(item) {
    return !!item.name.includes('Backstage');
  };

  isConjuredItem(item) {
    return !!item.name.includes('Conjured');
  };
};
