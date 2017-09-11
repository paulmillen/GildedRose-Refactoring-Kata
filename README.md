# Gilded Rose Refactoring Kata

This Kata was originally created by Terry Hughes (http://twitter.com/#!/TerryHughes). It is already on GitHub [here](https://github.com/NotMyself/GildedRose). See also [Bobby Johnson's description of the kata](http://iamnotmyself.com/2011/02/13/refactor-this-the-gilded-rose-kata/).

### Solution

Original code was refactored into three classes:

* Shop controller class
* ItemTyper which identified the items within the shop
* QualityGuide which applied the quality rules for each item on update.

The code is now more easily readible, and additional item rules can easily be added to the QualityGuide class.  

However, it is apparent that each item could be a discrete class of its own, each with duck-type methods deferring to the Shop classes UpdateQuality method.  This would support more robust expansion of the program for additional items as the code would not need to be modified, only extended.
