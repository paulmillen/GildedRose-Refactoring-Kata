describe('Shop', () => {

  const item = new Item("common item", 0, 0)
  const gildedRose = new Shop([item]);

  it('instantiates with an items object', () => {
    expect(gildedRose.items[0].name).toEqual("common item");
  });

  describe('updateQuality', () => {

    const sellIn = 1
    const quality = 50
    const item = new Item("common item", sellIn, quality)
    const gildedRose = new Shop([item]);

    it('lowers a common item value by 1', () => {
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(quality - 1)
    });

    it('reduces quality twice as much when sellIn is at 0', () => {
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(quality - 3)
    });

    it('does not lower a common items quality below 0', () => {
      while (gildedRose.items[0].quality > 0) {
        gildedRose.updateQuality();
      };
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(0)
    });
  });

});
