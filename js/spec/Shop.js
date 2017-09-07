describe('Shop', () => {

  const item = new Item("common item", 0, 0)
  const gildedRose = new Shop([item]);

  it('instantiates with an items object', () => {
    expect(gildedRose.items[0].name).toEqual("common item");
  });

  describe('updateQuality', () => {

    describe('with common items', () => {

      const sellIn = 1
      const quality = 50
      const item = new Item("common item", sellIn, quality)
      const gildedRose = new Shop([item]);

      it('lowers its value by 1', () => {
        gildedRose.updateQuality();
        expect(gildedRose.items[0].quality).toEqual(quality - 1)
      });

      it('quality degrades twice as much when sellIn is at 0', () => {
        gildedRose.updateQuality();
        expect(gildedRose.items[0].quality).toEqual(quality - 3)
      });

      it('does not lower its quality below 0', () => {
        while (gildedRose.items[0].quality > 0) {
          gildedRose.updateQuality();
        };
        gildedRose.updateQuality();
        expect(gildedRose.items[0].quality).toEqual(0)
      });
    });

    describe('Aged Brie', () => {

      const sellIn = 0
      const quality = 49
      const agedBrie = new Item("Aged Brie", sellIn, quality)
      const gildedRose = new Shop([agedBrie]);

      it('increases its value by 1 when it gets older', () => {
        gildedRose.updateQuality();
        expect(gildedRose.items[0].quality).toEqual(quality + 1)
      });

      it('cannot have a quality higher than 50', () => {
        gildedRose.updateQuality();
        expect(gildedRose.items[0].quality).toEqual(quality + 1)
      });
    });

    describe('Sulfuras', () => {

      const sellIn = 1
      const quality = 1
      const sulfuras = new Item("Sulfuras, Hand of Ragnaros", sellIn, quality)
      const gildedRose = new Shop([sulfuras]);

      it('quality unchanged by updateQuality', () => {
        gildedRose.updateQuality();
        expect(gildedRose.items[0].quality).toEqual(quality)
      });

      it('sellIn unchanged by updateQuality', () => {
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        expect(gildedRose.items[0].sellIn).toEqual(sellIn)
      });
    });
  });

});
