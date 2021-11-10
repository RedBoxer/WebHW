export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {

        for (let item of this.items) {

		if (item.name == 'Sulfuras, Hand of Ragnaros') {
			continue
        	} else if (item.name == 'Aged Brie') {
 			if (item.quality < 50) {
                  		item.quality++
                	}
		} else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                        if (item.sellIn < 11 && item.quality < 50) {
                            item.quality++
                        }
                        if (item.sellIn < 6 && item.quality < 50) {
                            item.quality++
                        }
                } else {
			item.quality--
		}
	
		item.sellIn--

                if (item.sellIn < 0) {

                	if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                    		item.quality = 0
                    		continue
                	} 
                
               		if (item.quality > 0) {
                    		item.quality--
                	}
            	}
        }

        return this.items;
    }
}
