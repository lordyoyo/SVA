
const animalData = {
    "chicken":{
        "name" : "Chicken",
        "dataid" : "num_chicken",
        "url" : "https://stardewvalleywiki.com/Chicken",
        "produce" : {
            egg: {
                "name" : "Egg",
                "days": 1,
                "chance": 0,
                basic: {
                    "price" : 50,
                    "processed" : {
                        "result":"mayo.basic",
                        "quantity":1
                    }
                },
                silver: {
                    "price" : 62,
                    "processed" : {
                        "result":"mayo.basic",
                        "quantity":1
                    }
                },
                gold: {
                    "price" : 75,
                    "processed" : {
                        "result":"mayo.basic",
                        "quantity":1
                    }
                },
                iridium: {
                    "price" : 100,
                    "processed" : {
                        "result":"mayo.basic",
                        "quantity":1
                    }
                }
            },
            largeegg: {
                "name" : "Large Egg",
                "days": 1,
                "chance": 1,
                basic: {
                    "price" : 95,
                    "chance" : 0,
                    "coopchance" : 0,
                    "processed" : {
                        "result":"mayo.gold",
                        "quantity":1
                    }
                },
                silver: {
                    "price" : 118,
                    "chance": 0.18779,
                    "coopchance": 0.07121,
                    "processed" : {
                        "result":"mayo.gold",
                        "quantity":1
                    }
                },
                gold: {
                    "price" : 142,
                    "chance": 0.24556,
                    "coopchance": 0.19564,
                    "processed" : {
                        "result":"mayo.gold",
                        "quantity":1
                    }
                },
                iridium: {
                    "price" : 190,
                    "chance": 0.56665,
                    "coopchance": 0.73315,
                    "processed" : {
                        "result":"mayo.gold",
                        "quantity":1
                    }
                }
            }
        }
    },
    "duck":{
        "name" : "Duck",
        "dataid" : "num_duck",
        "url" : "https://stardewvalleywiki.com/Duck",
        "produce" : {
            duckegg: {
                "name" : "Duck Egg",
                "days": 2,
                "chance": 0.709,
                basic: {
                    "price" : 95,
                    "chance" : 0,
                    "coopchance" : 0,
                    "processed" : {
                        "result":"duckmayo.basic",
                        "quantity":1
                    }
                },
                silver: {
                    "price" : 118,
                    "chance": 0.18779,
                    "coopchance": 0.07121,
                    "processed" : {
                        "result":"duckmayo.basic",
                        "quantity":1
                    }
                },
                gold: {
                    "price" : 142,
                    "chance": 0.24556,
                    "coopchance": 0.19564,
                    "processed" : {
                        "result":"duckmayo.basic",
                        "quantity":1
                    }
                },
                iridium: {
                    "price" : 190,
                    "chance": 0.56665,
                    "coopchance": 0.73315,
                    "processed" : {
                        "result":"duckmayo.basic",
                        "quantity":1
                    }
                }
            },
            duckfeather: {
                "name" : "Duck Feather",
                "days": 2,
                "chance": 0.291,
                basic: {
                    "price" : 250,
                    "chance" : 0,
                    "coopchance" : 0
                },
                silver: {
                    "price" : 118,
                    "chance": 0.18779,
                    "coopchance": 0.07121
                },
                gold: {
                    "price" : 142,
                    "chance": 0.24556,
                    "coopchance": 0.19564
                },
                iridium: {
                    "price" : 190,
                    "chance": 0.56665,
                    "coopchance": 0.73315
                }
            }
        }
    },
    "rabbit":{
        "name" : "Rabbit",
        "dataid" : "num_rabbit",
        "url" : "https://stardewvalleywiki.com/Rabbit",
        "produce" : {
            wool: {
                "name" : "Wool",
                "days": 4,
                "chance": 0.7235,
                basic: {
                    "price" : 340,
                    "chance" : 0,
                    "coopchance" : 0,
                    "processed" : {
                        "result":"cloth.basic",
                        "quantity":1
                    }
                },
                silver: {
                    "price" : 425,
                    "chance": 0.18779,
                    "coopchance": 0.07121,
                    "processed" : {
                        "result":"cloth.basic",
                        "quantity":1.1
                    }
                },
                gold: {
                    "price" : 510,
                    "chance": 0.24556,
                    "coopchance": 0.19564,
                    "processed" : {
                        "result":"cloth.basic",
                        "quantity":1.5
                    }
                },
                iridium: {
                    "price" : 680,
                    "chance": 0.56665,
                    "coopchance": 0.73315,
                    "processed" : {
                        "result":"cloth.basic",
                        "quantity":2
                    }
                }
            },
            duckfeather: {
                "name" : "Rabbit's Foot",
                "days": 2,
                "chance": 0.2765,
                basic: {
                    "price" : 565,
                    "chance" : 0,
                    "coopchance" : 0
                },
                silver: {
                    "price" : 706,
                    "chance": 0.18779,
                    "coopchance": 0.07121
                },
                gold: {
                    "price" : 847,
                    "chance": 0.24556,
                    "coopchance": 0.19564
                },
                iridium: {
                    "price" : 1130,
                    "chance": 0.56665,
                    "coopchance": 0.73315
                }
            }
        }
    },
    "void":{
        "name" : "Void Chicken",
        "dataid" : "num_void",
        "url" : "https://stardewvalleywiki.com/Void_Chicken",
        "produce" : {
            voidegg: {
                "name" : "Void Egg",
                "days": 1,
                "chance": 1,
                basic: {
                    "price" : 65,
                    "chance" : 0,
                    "coopchance" : 0,
                    "processed" : {
                        "result":"voidmayo.basic",
                        "quantity":1
                    }
                },
                silver: {
                    "price" : 81,
                    "chance": 0.18779,
                    "coopchance": 0.07121,
                    "processed" : {
                        "result":"voidmayo.basic",
                        "quantity":1
                    }
                },
                gold: {
                    "price" : 97,
                    "chance": 0.24556,
                    "coopchance": 0.19564,
                    "processed" : {
                        "result":"voidmayo.basic",
                        "quantity":1
                    }
                },
                iridium: {
                    "price" : 130,
                    "chance": 0.56665,
                    "coopchance": 0.73315,
                    "processed" : {
                        "result":"voidmayo.basic",
                        "quantity":1
                    }
                }
            }
        }
    },
    "dino":{
        "name" : "Dinosaur",
        "dataid" : "num_dino",
        "url" : "https://stardewvalleywiki.com/Dinosaur",
        "produce" : {
            dinoegg: {
                "name" : "Dinosaur Egg",
                "days": 7,
                "chance": 1,
                basic: {
                    "price" : 350,
                    "chance" : 0,
                    "coopchance" : 0,
                    "processed" : {
                        "result":"dinomayo.basic",
                        "quantity":1
                    }
                },
                silver: {
                    "price" : 437,
                    "chance": 0.18779,
                    "coopchance": 0.07121,
                    "processed" : {
                        "result":"dinomayo.basic",
                        "quantity":1
                    }
                },
                gold: {
                    "price" : 525,
                    "chance": 0.24556,
                    "coopchance": 0.19564,
                    "processed" : {
                        "result":"dinomayo.basic",
                        "quantity":1
                    }
                },
                iridium: {
                    "price" : 700,
                    "chance": 0.56665,
                    "coopchance": 0.73315,
                    "processed" : {
                        "result":"dinomayo.basic",
                        "quantity":1
                    }
                }
            }
        }
    },
    "gold":{
        "name" : "Golden Chicken",
        "dataid" : "num_gold",
        "url" : "https://stardewvalleywiki.com/Golden_Chicken",
        "produce" : {
            goldegg: {
                "name" : "Golden Egg",
                "days": 1,
                "chance": 1,
                basic: {
                    "price" : 500,
                    "chance" : 0,
                    "coopchance" : 0,
                    "processed" : {
                        "result":"mayo.gold",
                        "quantity":3
                    }
                },
                silver: {
                    "price" : 625,
                    "chance": 0.18779,
                    "coopchance": 0.07121,
                    "processed" : {
                        "result":"mayo.gold",
                        "quantity":3
                    }
                },
                gold: {
                    "price" : 750,
                    "chance": 0.24556,
                    "coopchance": 0.19564,
                    "processed" : {
                        "result":"mayo.gold",
                        "quantity":3
                    }
                },
                iridium: {
                    "price" : 1000,
                    "chance": 0.56665,
                    "coopchance": 0.73315,
                    "processed" : {
                        "result":"mayo.gold",
                        "quantity":3
                    }
                }
            }
        }
    },
    "cow":{
        "name" : "Cow",
        "dataid" : "num_cow",
        "url" : "https://stardewvalleywiki.com/Cow",
        "produce" : {
            milk: {
                "name" : "Milk",
                "days": 1,
                "chance": 0,
                basic: {
                    "price" : 125,
                    "chance" : 0,
                    "processed" : {
                        "result":"cheese.basic",
                        "quantity":1
                    }
                },
                silver: {
                    "price" : 156,
                    "chance": 0.18779,
                    "processed" : {
                        "result":"cheese.basic",
                        "quantity":1
                    }
                },
                gold: {
                    "price" : 187,
                    "chance": 0.24556,
                    "processed" : {
                        "result":"cheese.basic",
                        "quantity":1
                    }
                },
                iridium: {
                    "price" : 250,
                    "chance": 0.56665,
                    "processed" : {
                        "result":"cheese.basic",
                        "quantity":1
                    }
                }
            },
            largemilk: {
                "name" : "Large Milk",
                "days": 1,
                "chance": 1,
                basic: {
                    "price" : 190,
                    "chance" : 0,
                    "processed" : {
                        "result":"cheese.gold",
                        "quantity":1
                    }
                },
                silver: {
                    "price" : 237,
                    "chance": 0.18779,
                    "processed" : {
                        "result":"cheese.gold",
                        "quantity":1
                    }
                },
                gold: {
                    "price" : 285,
                    "chance": 0.24556,
                    "processed" : {
                        "result":"cheese.gold",
                        "quantity":1
                    }
                },
                iridium: {
                    "price" : 380,
                    "chance": 0.56665,
                    "processed" : {
                        "result":"cheese.gold",
                        "quantity":1
                    }
                }
            }
        }
    },
    "goat":{
        "name" : "goat",
        "dataid" : "num_goat",
        "url" : "https://stardewvalleywiki.com/Goat",
        "produce" : {
            goatmilk: {
                "name" : "Goat Milk",
                "days": 2,
                "chance": 0,
                basic: {
                    "price" : 225,
                    "chance" : 0,
                    "processed" : {
                        "result":"goatcheese.basic",
                        "quantity":1
                    }
                },
                silver: {
                    "price" : 281,
                    "chance": 0.18779,
                    "processed" : {
                        "result":"goatcheese.basic",
                        "quantity":1
                    }
                },
                gold: {
                    "price" : 337,
                    "chance": 0.24556,
                    "processed" : {
                        "result":"goatcheese.basic",
                        "quantity":1
                    }
                },
                iridium: {
                    "price" : 450,
                    "chance": 0.56665,
                    "processed" : {
                        "result":"goatcheese.basic",
                        "quantity":1
                    }
                }
            },
            largegoatmilk: {
                "name" : "Large Goat Milk",
                "days": 2,
                "chance": 1,
                basic: {
                    "price" : 345,
                    "chance" : 0,
                    "processed" : {
                        "result":"goatcheese.gold",
                        "quantity":1
                    }
                },
                silver: {
                    "price" : 431,
                    "chance": 0.18779,
                    "processed" : {
                        "result":"goatcheese.gold",
                        "quantity":1
                    }
                },
                gold: {
                    "price" : 517,
                    "chance": 0.24556,
                    "processed" : {
                        "result":"goatcheese.gold",
                        "quantity":1
                    }
                },
                iridium: {
                    "price" : 690,
                    "chance": 0.56665,
                    "processed" : {
                        "result":"goatcheese.gold",
                        "quantity":1
                    }
                }
            }
        }
    },
    "sheep":{
        "name" : "Sheep",
        "dataid" : "num_sheep",
        "url" : "https://stardewvalleywiki.com/Sheep",
        "produce" : {
            wool: {
                "name" : "Wool",
                "days": 2,
                "shepdays": 1,
                "chance": 0.7235,
                basic: {
                    "price" : 340,
                    "chance" : 0,
                    "shepchance" : 0,
                    "processed" : {
                        "result":"cloth.basic",
                        "quantity":1
                    }
                },
                silver: {
                    "price" : 425,
                    "chance": 0.18779,
                    "shepchance": 0.07121,
                    "processed" : {
                        "result":"cloth.basic",
                        "quantity":1.1
                    }
                },
                gold: {
                    "price" : 510,
                    "chance": 0.24556,
                    "shepchance": 0.19564,
                    "processed" : {
                        "result":"cloth.basic",
                        "quantity":1.5
                    }
                },
                iridium: {
                    "price" : 680,
                    "chance": 0.56665,
                    "shepchance": 0.73315,
                    "processed" : {
                        "result":"cloth.basic",
                        "quantity":2
                    }
                }
            }
        }
    },
    "pig":{
        "name" : "Pig",
        "dataid" : "num_pig",
        "url" : "https://stardewvalleywiki.com/Pig",
        "produce" : {
            truffle: {
                "name" : "Truffle",
                "days": 1/3,
                "chance": 1,
                basic: {
                    "price" : 625,
                    "chance" : 0.22,
                    "botchance" : 0,
                    "processed" : {
                        "result":"truffleoil.basic",
                        "quantity":1
                    }
                },
                silver: {
                    "price" : 781,
                    "chance": 0.45,
                    "botchance": 0,
                    "processed" : {
                        "result":"truffleoil.basic",
                        "quantity":1
                    }
                },
                gold: {
                    "price" : 937,
                    "chance": 0.33,
                    "botchance": 0,
                    "processed" : {
                        "result":"truffleoil.basic",
                        "quantity":1
                    }
                },
                iridium: {
                    "price" : 1250,
                    "chance": 0,
                    "botchance": 1,
                    "processed" : {
                        "result":"truffleoil.basic",
                        "quantity":1
                    }
                }
            }
        }
    },
    "ostrich":{
        "name" : "Ostrich",
        "dataid" : "num_ostrich",
        "url" : "https://stardewvalleywiki.com/Ostrich",
        "produce" : {
            ostrichegg: {
                "name" : "Ostrich Egg",
                "days": 7,
                "chance": 1,
                basic: {
                    "price" : 600,
                    "chance" : 0,
                    "coopchance" : 0,
                    "processed" : {
                        "result":"mayo.basic",
                        "quantity":10
                    }
                },
                silver: {
                    "price" : 750,
                    "chance": 0.18779,
                    "coopchance": 0.07121,
                    "processed" : {
                        "result":"mayo.silver",
                        "quantity":10
                    }
                },
                gold: {
                    "price" : 900,
                    "chance": 0.24556,
                    "coopchance": 0.19564,
                    "processed" : {
                        "result":"mayo.gold",
                        "quantity":10
                    }
                },
                iridium: {
                    "price" : 1200,
                    "chance": 0.56665,
                    "coopchance": 0.73315,
                    "processed" : {
                        "result":"mayo.iridium",
                        "quantity":10
                    }
                }
            }
        }
    }
};

const produceData = {
    "mayo":{
        "name": "Mayonnaise",
        basic: {
            "price" : 190,
        },
        silver: {
            "price" : 237,
        },
        gold: {
            "price" : 285,
        },
        iridium: {
            "price" : 380,
        },
        "rancher" : 1.2,
        "artisan" : 1.4
    },
    "duckmayo":{
        "name": "Duck Mayonnaise",
        basic: {
            "price": 375
        },
        "rancher" : 1.2,
        "artisan" : 1.4
    },
    "dinokmayo":{
        "name": "Dinosaur Mayonnaise",
        basic: {
            "price": 800
        },
        "rancher" : 1.2,
        "artisan" : 1.4
    },
    "voidmayo":{
        "name": "Void Mayonnaise",
        basic: {
            "price": 275
        },
        "rancher" : 1.2,
        "artisan" : 1.4
    },
    "cloth":{
        "name": "Cloth",
        basic: {
            "price": 470
        },
        "rancher" : 1.2,
        "artisan" : 1.4
    },
    "cheese":{
        "name": "Cheese",
        basic: {
            "price" : 230,
        },
        silver: {
            "price" : 287,
        },
        gold: {
            "price" : 345,
        },
        iridium: {
            "price" : 460,
        },
        "rancher" : 1.2,
        "artisan" : 1.4
    },
    "goatcheese":{
        "name": "Goat Cheese",
        basic: {
            "price" : 400,
        },
        silver: {
            "price" : 500,
        },
        gold: {
            "price" : 600,
        },
        iridium: {
            "price" : 800,
        },
        "rancher" : 1.2,
        "artisan" : 1.4
    }
}
