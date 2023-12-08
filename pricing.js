const params = {
	notice : false,
	section1 : {
		enabled : true // Why are we the best in the industry
	},
	free_trial_enabled : true,
}
const homeSplash = {
	default : { // The default splash data
		en : {
			media : {
					desktop : {
						type : "image",
						url : ""
					},
					mobile : {
						type : "image",
						url : "/splah.png"
					}
			},
			headline : {
				slogan1 : "PREMIUM",
				slogan2 : "IPTV",
				slogan3 : "FOR FIRESTICK",
				slogan_description : " One of the best IPTV subscription service provider worldwide with fast activation and no setup fees.",
				slogan_description2 : "Experience the Best Worldwide IPTV Subscription Service: Fast Activation, No Setup Fees.",
			},
		},
		es : {
			media : {
				desktop : {
					type : "image",
					url : ""
				},
				mobile : {
					type : "image",
					url : ""
				},
			},
			headline : {
				slogan1: "EL #1 MÁS",
				slogan2: "CONFIABLE",
				slogan3: "PROVEEDOR DE IPTV",
				slogan_description: "Uno de los mejores proveedores de servicios de suscripción de IPTV en todo el mundo con activación rápida y sin tarifas de configuración.",
				slogan_description2: "Experimenta el mejor servicio de suscripción IPTV en todo el mundo: Activación rápida, sin tarifas de configuración.",
			}
		}
	},
	keywords : { // 
		en : [
			{
                id : 0,
				media : {
					desktop : {
						type : "image",
						url : ""
					},
					mobile : {
						type : "image",
						url : "/splah.png"
					},
				},
				headline : {
					slogan1 : "PREMIUM",
					slogan2 : "IPTV",
					slogan3 : "FOR FIRESTICK",
					slogan_description : " One of the best IPTV subscription service provider worldwide with fast activation and no setup fees.",
					slogan_description2 : "Experience the Best Worldwide IPTV Subscription Service: Fast Activation, No Setup Fees.",
				},
			},
			{
                id :1,
				media : {
					desktop : {
						type : "image",
						url : ""
					},
					mobile : {
						type : "image",
						url : "/splah.png"
					},
				},
				headline : {
					slogan1 : "PREMIUM",
					slogan2 : "IPTV",
					slogan3 : "FOR SMART TV",
					slogan_description :"Discover the most budget-friendly IPTV service in the industry, offering a wide range of high-quality channels and features, all at",
					slogan_description2 : "Quality entertainment without breaking the bank.",
				},
			},
			{
                id : 2,
				media : {
					desktop : {
						type : "image",
						url : ""
					},
					mobile : {
						type : "image",
						url : ""
					},
				},
				headline : {
					slogan1 : "PREMIUM",
					slogan2 : "IPTV",
					slogan3 : "FOR ANDROID BOX",
					slogan_description : " One of the best IPTV subscription service provider worldwide with fast activation and no setup fees.",
					slogan_description2 : "Experience the Best Worldwide IPTV Subscription Service: Fast Activation, No Setup Fees.",
				}
			},
			{
                id : 3,
				media : {
					desktop : {
						type : "video",
						url : "/promotion.mp4"
					},
					mobile : {
						type : "video",
						url : "/promotion.mp4"
					},
				},
				headline : {
					slogan1 : "PREMIUM",
					slogan2 : "IPTV",
					slogan3 : "FOR ANDROID BOX",
					slogan_description : " One of the best IPTV subscription service provider worldwide with fast activation and no setup fees.",
					slogan_description2 : "Experience the Best Worldwide IPTV Subscription Service: Fast Activation, No Setup Fees.",
				}
			},
		],
		es : [
			{
                id : 0,
				media : {
					desktop : {
						type : "image",
						url : ""
					},
					mobile : {
						type : "image",
						url : ""
					},
				},
				headline : {
					slogan1: "EL #1 MÁS",
					slogan2: "CONFIABLE",
					slogan3: "PROVEEDOR DE IPTV",
					slogan_description: "Uno de los mejores proveedores de servicios de suscripción de IPTV en todo el mundo con activación rápida y sin tarifas de configuración.",
					slogan_description2: "Experimenta el mejor servicio de suscripción IPTV en todo el mundo: Activación rápida, sin tarifas de configuración.",
				}
			}
	]
	}
}
const Dt = [
    {
        period : 1,
        id : 0,
        color : "#2c92f2",
        save : "0%",
		availability : {
			enabled : true,
			notificationMsg : "This plan is temporarily disabled please contact support for more informations"
		},
        Connections : [
            {
                connection : 1,
                id : 0,
                price : [
                    {
                        amount : 14,
                        currency : "USD",
                        symbol : "$",
                        url : "https://sowl.co/bgLeLR"
                    },
                    {
                        amount : 14,
                        currency : "EUR",
                        symbol : "€",
                        url : "https://sowl.co/CXUY9"
                    },
                    {
                        amount : 12,
                        currency : "POUNT",
                        symbol : "£",
                        url : "https://sowl.co/baheae"
                    },
                ],
                features : [
                    {
                        available : true,
                        name : "20,000 Channels",
                    },
                    {
                        available : true,
                        name : "Premium 4K, HD & SD channels",
                    },
                    {
                        available : true,
                        name : "Catch Up / EPG For All UK",
                    },
                    {
                        available : true,
                        name : "FREE Channels & VOD",
                    },
                    {
                        available : true,
                        name : "Format M3U & MAG & Enigma",
                    },
                    {
                        available : true,
                        name : "Guide TV (EPG)",
                    },
                    {
                        available : true,
                        name : "99.9% Server Uptime",
                    },
                    {
                        available : true,
                        name : "24/7 Dedicated Support",
                    },
                    {
                        available : true,
                        name : "AntiFreeze Tech",
                    },
                    {
                        available : true,
                        name : "over 100K Movies on Demand",
                    }
                ]
            },
            {
                connection : 2,
                id : 1,
                price : [
                    {
                        amount : 21,
                        currency : "USD",
                        symbol : "$",
                        url : "https://sowl.co/MQprh"
                    },
                    {
                        amount : 21,
                        currency : "EUR",
                        symbol : "€",
                        url : "https://sowl.co/7RYEK"
                    },
                    {
                        amount : 19,
                        currency : "POUNT",
                        symbol : "£",
                        url : "https://sowl.co/vWFHL"
                    },
                ],
                features : [
                    {
                        available : true,
                        name : "20,000 Channels",
                    },
                    {
                        available : true,
                        name : "Premium 4K, HD & SD channels",
                    },
                    {
                        available : true,
                        name : "Catch Up / EPG For All UK",
                    },
                    {
                        available : true,
                        name : "FREE Channels & VOD",
                    },
                    {
                        available : true,
                        name : "Format M3U & MAG & Enigma",
                    },
                    {
                        available : true,
                        name : "Guide TV (EPG)",
                    },
                    {
                        available : true,
                        name : "99.9% Server Uptime",
                    },
                    {
                        available : true,
                        name : "24/7 Dedicated Support",
                    },
                    {
                        available : true,
                        name : "AntiFreeze Tech",
                    },
                    {
                        available : true,
                        name : "over 100K Movies on Demand",
                    }
                ]
            },
            {
                connection : 3,
                id : 2,
                price : [
                    {
                        amount : 30,
                        currency : "USD",
                        symbol : "$",
                        url : "https://sowl.co/rhFFg"
                    },
                    {
                        amount : 30,
                        currency : "EUR",
                        symbol : "€",
                        url : "https://sowl.co/6jtXV"
                    },
                    {
                        amount : 27,
                        currency : "POUNT",
                        symbol : "£",
                        url : "https://sowl.co/bjaw8e"
                    },
                ],
                features : [
                    {
                        available : true,
                        name : "20,000 Channels",
                    },
                    {
                        available : true,
                        name : "Premium 4K, HD & SD channels",
                    },
                    {
                        available : true,
                        name : "Catch Up / EPG For All UK",
                    },
                    {
                        available : true,
                        name : "FREE Channels & VOD",
                    },
                    {
                        available : true,
                        name : "Format M3U & MAG & Enigma",
                    },
                    {
                        available : true,
                        name : "Guide TV (EPG)",
                    },
                    {
                        available : true,
                        name : "99.9% Server Uptime",
                    },
                    {
                        available : true,
                        name : "24/7 Dedicated Support",
                    },
                    {
                        available : true,
                        name : "AntiFreeze Tech",
                    },
                    {
                        available : true,
                        name : "over 100K Movies on Demand",
                    }
                ]
            },
            {
                connection : 4,
                id : 3,
                price : [
                    {
                        amount : 36,
                        currency : "USD",
                        symbol : "$",
                        url : "https://sowl.co/brhRoN"
                    },
                    {
                        amount : 36,
                        currency : "EUR",
                        symbol : "€",
                        url : "https://sowl.co/bbnXQW"
                    },
                    {
                        amount : 32,
                        currency : "POUNT",
                        symbol : "£",
                        url : "https://sowl.co/PfUuf"
                    },
                ],
                features : [
                    {
                        available : true,
                        name : "20,000 Channels",
                    },
                    {
                        available : true,
                        name : "Premium 4K, HD & SD channels",
                    },
                    {
                        available : true,
                        name : "Catch Up / EPG For All UK",
                    },
                    {
                        available : true,
                        name : "FREE Channels & VOD",
                    },
                    {
                        available : true,
                        name : "Format M3U & MAG & Enigma",
                    },
                    {
                        available : true,
                        name : "Guide TV (EPG)",
                    },
                    {
                        available : true,
                        name : "99.9% Server Uptime",
                    },
                    {
                        available : true,
                        name : "24/7 Dedicated Support",
                    },
                    {
                        available : true,
                        name : "AntiFreeze Tech",
                    },
                    {
                        available : true,
                        name : "over 100K Movies on Demand",
                    }
                ]
            },
        ],
    },
    {
        period : 12,
        id : 2,
        save : "70%",
		availability : {
			enabled : true,
		},
        color : "#0ed078",
        besSeller : "/best-seller.png",
        Connections : [
            {
                connection : 1,
                id : 8,
                price : [
                    {
                        amount : 83,
                        currency : "USD",
                        symbol : "$",
                        url : "https://sowl.co/buLfJo"
                    },
                    {
                        amount : 83,
                        currency : "EUR",
                        symbol : "€",
                        url : "https://sowl.co/mjRFZ"
                    },
                    {
                        amount : 72,
                        currency : "POUNT",
                        symbol : "£",
                        url : "https://sowl.co/bdFPex"
                    },
                ],
                features : [
                    {
                        available : true,
                        name : "20,000 Channels",
                    },
                    {
                        available : true,
                        name : "Premium 4K, HD & SD channels",
                    },
                    {
                        available : true,
                        name : "Catch Up / EPG For All UK",
                    },
                    {
                        available : true,
                        name : "FREE Channels & VOD",
                    },
                    {
                        available : true,
                        name : "Format M3U & MAG & Enigma",
                    },
                    {
                        available : true,
                        name : "Guide TV (EPG)",
                    },
                    {
                        available : true,
                        name : "99.9% Server Uptime",
                    },
                    {
                        available : true,
                        name : "24/7 Dedicated Support",
                    },
                    {
                        available : true,
                        name : "AntiFreeze Tech",
                    },
                    {
                        available : true,
                        name : "over 100K Movies on Demand",
                    }
                ]
            },
            {
                connection : 2,
                id : 9,
                price : [
                    {
                        amount : 122,
                        currency : "USD",
                        symbol : "$",
                        url : "https://sowl.co/bqBtqZ"
                    },
                    {
                        amount : 122,
                        currency : "EUR",
                        symbol : "€",
                        url : "https://sowl.co/4aEYy"
                    },
                    {
                        amount : 110,
                        currency : "POUNT",
                        symbol : "£",
                        url : "https://sowl.co/UHzaE"
                    },
                ],
                features : [
                    {
                        available : true,
                        name : "20,000 Channels",
                    },
                    {
                        available : true,
                        name : "Premium 4K, HD & SD channels",
                    },
                    {
                        available : true,
                        name : "Catch Up / EPG For All UK",
                    },
                    {
                        available : true,
                        name : "FREE Channels & VOD",
                    },
                    {
                        available : true,
                        name : "Format M3U & MAG & Enigma",
                    },
                    {
                        available : true,
                        name : "Guide TV (EPG)",
                    },
                    {
                        available : true,
                        name : "99.9% Server Uptime",
                    },
                    {
                        available : true,
                        name : "24/7 Dedicated Support",
                    },
                    {
                        available : true,
                        name : "AntiFreeze Tech",
                    },
                    {
                        available : true,
                        name : "over 100K Movies on Demand",
                    }
                ]
            },
            {
                connection : 3,
                id : 10,
                price : [
                    {
                        amount : 188,
                        currency : "USD",
                        symbol : "$",
                        url : "https://sowl.co/LS8ae"
                    },
                    {
                        amount : 193,
                        currency : "EUR",
                        symbol : "€",
                        url : "https://sowl.co/CJLnr"
                    },
                    {
                        amount : 170,
                        currency : "POUNT",
                        symbol : "£",
                        url : "https://sowl.co/RupTe"
                    },
                ],
                features : [
                    {
                        available : true,
                        name : "20,000 Channels",
                    },
                    {
                        available : true,
                        name : "Premium 4K, HD & SD channels",
                    },
                    {
                        available : true,
                        name : "Catch Up / EPG For All UK",
                    },
                    {
                        available : true,
                        name : "FREE Channels & VOD",
                    },
                    {
                        available : true,
                        name : "Format M3U & MAG & Enigma",
                    },
                    {
                        available : true,
                        name : "Guide TV (EPG)",
                    },
                    {
                        available : true,
                        name : "99.9% Server Uptime",
                    },
                    {
                        available : true,
                        name : "24/7 Dedicated Support",
                    },
                    {
                        available : true,
                        name : "AntiFreeze Tech",
                    },
                    {
                        available : true,
                        name : "over 100K Movies on Demand",
                    }
                ]
            },
            {
                connection : 4,
                id : 11,
                price : [
                    {
                        amount : 232,
                        currency : "USD",
                        symbol : "$",
                        url : "https://sowl.co/erKmg"
                    },
                    {
                        amount : 239,
                        currency : "EUR",
                        symbol : "€",
                        url : "https://sowl.co/bwyZjF"
                    },
                    {
                        amount : 210,
                        currency : "POUND",
                        symbol : "£",
                        url : "https://sowl.co/VTzeg"
                    },
                ],
                features : [
                    {
                        available : true,
                        name : "20,000 Channels",
                    },
                    {
                        available : true,
                        name : "Premium 4K, HD & SD channels",
                    },
                    {
                        available : true,
                        name : "Catch Up / EPG For All UK",
                    },
                    {
                        available : true,
                        name : "FREE Channels & VOD",
                    },
                    {
                        available : true,
                        name : "Format M3U & MAG & Enigma",
                    },
                    {
                        available : true,
                        name : "Guide TV (EPG)",
                    },
                    {
                        available : true,
                        name : "99.9% Server Uptime",
                    },
                    {
                        available : true,
                        name : "24/7 Dedicated Support",
                    },
                    {
                        available : true,
                        name : "AntiFreeze Tech",
                    },
                    {
                        available : true,
                        name : "over 100K Movies on Demand",
                    }
                ]
            },
        ],
    },
    {
        period : 3,
        id : 2,
        color : "#8130f0",
        save : "30%",
		availability : {
			enabled : true,
		},
        Connections : [
            {
                connection : 1,
                id : 4,
                price : [
                    {
                        amount : 33,
                        currency : "USD",
                        symbol : "$",
                        url : "https://transactions.sendowl.com/products/78710767/9A142F50/purchase"
                    },
                    {
                        amount : 33,
                        currency : "EUR",
                        symbol : "€",
                        url : "https://transactions.sendowl.com/products/78710789/ACADF04C/purchase"
                    },
                    {
                        amount : 29,
                        currency : "POUNT",
                        symbol : "£",
                        url : "https://sowl.co/HNKqN"
                    },
                ],
                features : [
                    {
                        available : true,
                        name : "20,000 Channels",
                    },
                    {
                        available : true,
                        name : "Premium 4K, HD & SD channels",
                    },
                    {
                        available : true,
                        name : "Catch Up / EPG For All UK",
                    },
                    {
                        available : true,
                        name : "FREE Channels & VOD",
                    },
                    {
                        available : true,
                        name : "Format M3U & MAG & Enigma",
                    },
                    {
                        available : true,
                        name : "Guide TV (EPG)",
                    },
                    {
                        available : true,
                        name : "99.9% Server Uptime",
                    },
                    {
                        available : true,
                        name : "24/7 Dedicated Support",
                    },
                    {
                        available : true,
                        name : "AntiFreeze Tech",
                    },
                    {
                        available : true,
                        name : "over 100K Movies on Demand",
                    }
                ]
            },
            {
                connection : 2,
                id : 5,
                price : [
                    {
                        amount : 54,
                        currency : "USD",
                        symbol : "$",
                        url : "https://sowl.co/bfHN67"
                    },
                    {
                        amount : 55,
                        currency : "EUR",
                        symbol : "€",
                        url : "https://sowl.co/xLJYS"
                    },
                    {
                        amount : 49,
                        currency : "POUNT",
                        symbol : "£",
                        url : "https://sowl.co/PPWGR"
                    },
                ],
                features : [
                    {
                        available : true,
                        name : "20,000 Channels",
                    },
                    {
                        available : true,
                        name : "Premium 4K, HD & SD channels",
                    },
                    {
                        available : true,
                        name : "Catch Up / EPG For All UK",
                    },
                    {
                        available : true,
                        name : "FREE Channels & VOD",
                    },
                    {
                        available : true,
                        name : "Format M3U & MAG & Enigma",
                    },
                    {
                        available : true,
                        name : "Guide TV (EPG)",
                    },
                    {
                        available : true,
                        name : "99.9% Server Uptime",
                    },
                    {
                        available : true,
                        name : "24/7 Dedicated Support",
                    },
                    {
                        available : true,
                        name : "AntiFreeze Tech",
                    },
                    {
                        available : true,
                        name : "over 100K Movies on Demand",
                    }
                ]
            },
            {
                connection : 3,
                id : 6,
                price : [
                    {
                        amount : 82,
                        currency : "USD",
                        symbol : "$",
                        url : "https://sowl.co/TWzHZ"
                    },
                    {
                        amount : 84,
                        currency : "EUR",
                        symbol : "€",
                        url : "https://sowl.co/LQAX5"
                    },
                    {
                        amount : 74,
                        currency : "POUNT",
                        symbol : "£",
                        url : "https://sowl.co/NDuwg"
                    },
                ],
                features : [
                    {
                        available : true,
                        name : "20,000 Channels",
                    },
                    {
                        available : true,
                        name : "Premium 4K, HD & SD channels",
                    },
                    {
                        available : true,
                        name : "Catch Up / EPG For All UK",
                    },
                    {
                        available : true,
                        name : "FREE Channels & VOD",
                    },
                    {
                        available : true,
                        name : "Format M3U & MAG & Enigma",
                    },
                    {
                        available : true,
                        name : "Guide TV (EPG)",
                    },
                    {
                        available : true,
                        name : "99.9% Server Uptime",
                    },
                    {
                        available : true,
                        name : "24/7 Dedicated Support",
                    },
                    {
                        available : true,
                        name : "AntiFreeze Tech",
                    },
                    {
                        available : true,
                        name : "over 100K Movies on Demand",
                    }
                ]
            },
            {
                connection : 4,
                id : 7,
                price : [
                    {
                        amount : 109,
                        currency : "USD",
                        symbol : "$",
                        url : "https://sowl.co/boUtDX"
                    },
                    {
                        amount : 109,
                        currency : "EUR",
                        symbol : "€",
                        url : "https://sowl.co/bfgQKe"
                    },
                    {
                        amount : 99,
                        currency : "POUNT",
                        symbol : "£",
                        url : "https://sowl.co/cYETP"
                    },
                ],
                features : [
                    {
                        available : true,
                        name : "20,000 Channels",
                    },
                    {
                        available : true,
                        name : "Premium 4K, HD & SD channels",
                    },
                    {
                        available : true,
                        name : "Catch Up / EPG For All UK",
                    },
                    {
                        available : true,
                        name : "FREE Channels & VOD",
                    },
                    {
                        available : true,
                        name : "Format M3U & MAG & Enigma",
                    },
                    {
                        available : true,
                        name : "Guide TV (EPG)",
                    },
                    {
                        available : true,
                        name : "99.9% Server Uptime",
                    },
                    {
                        available : true,
                        name : "24/7 Dedicated Support",
                    },
                    {
                        available : true,
                        name : "AntiFreeze Tech",
                    },
                    {
                        available : true,
                        name : "over 100K Movies on Demand",
                    }
                ]
            },
        ],
    },
    {
        period : 3,
        id : 2,
        color : "#8130f0",
        save : "30%",
		availability : {
			enabled : true,
		},
        Connections : [
            {
                connection : 1,
                id : 4,
                price : [
                    {
                        amount : 33,
                        currency : "USD",
                        symbol : "$",
                        url : "https://transactions.sendowl.com/products/78710767/9A142F50/purchase"
                    },
                    {
                        amount : 33,
                        currency : "EUR",
                        symbol : "€",
                        url : "https://transactions.sendowl.com/products/78710789/ACADF04C/purchase"
                    },
                    {
                        amount : 29,
                        currency : "POUNT",
                        symbol : "£",
                        url : "https://sowl.co/HNKqN"
                    },
                ],
                features : [
                    {
                        available : true,
                        name : "20,000 Channels",
                    },
                    {
                        available : true,
                        name : "Premium 4K, HD & SD channels",
                    },
                    {
                        available : true,
                        name : "Catch Up / EPG For All UK",
                    },
                    {
                        available : true,
                        name : "FREE Channels & VOD",
                    },
                    {
                        available : true,
                        name : "Format M3U & MAG & Enigma",
                    },
                    {
                        available : true,
                        name : "Guide TV (EPG)",
                    },
                    {
                        available : true,
                        name : "99.9% Server Uptime",
                    },
                    {
                        available : true,
                        name : "24/7 Dedicated Support",
                    },
                    {
                        available : true,
                        name : "AntiFreeze Tech",
                    },
                    {
                        available : true,
                        name : "over 100K Movies on Demand",
                    }
                ]
            },
            {
                connection : 2,
                id : 5,
                price : [
                    {
                        amount : 54,
                        currency : "USD",
                        symbol : "$",
                        url : "https://sowl.co/bfHN67"
                    },
                    {
                        amount : 55,
                        currency : "EUR",
                        symbol : "€",
                        url : "https://sowl.co/xLJYS"
                    },
                    {
                        amount : 49,
                        currency : "POUNT",
                        symbol : "£",
                        url : "https://sowl.co/PPWGR"
                    },
                ],
                features : [
                    {
                        available : true,
                        name : "20,000 Channels",
                    },
                    {
                        available : true,
                        name : "Premium 4K, HD & SD channels",
                    },
                    {
                        available : true,
                        name : "Catch Up / EPG For All UK",
                    },
                    {
                        available : true,
                        name : "FREE Channels & VOD",
                    },
                    {
                        available : true,
                        name : "Format M3U & MAG & Enigma",
                    },
                    {
                        available : true,
                        name : "Guide TV (EPG)",
                    },
                    {
                        available : true,
                        name : "99.9% Server Uptime",
                    },
                    {
                        available : true,
                        name : "24/7 Dedicated Support",
                    },
                    {
                        available : true,
                        name : "AntiFreeze Tech",
                    },
                    {
                        available : true,
                        name : "over 100K Movies on Demand",
                    }
                ]
            },
            {
                connection : 3,
                id : 6,
                price : [
                    {
                        amount : 82,
                        currency : "USD",
                        symbol : "$",
                        url : "https://sowl.co/TWzHZ"
                    },
                    {
                        amount : 84,
                        currency : "EUR",
                        symbol : "€",
                        url : "https://sowl.co/LQAX5"
                    },
                    {
                        amount : 74,
                        currency : "POUNT",
                        symbol : "£",
                        url : "https://sowl.co/NDuwg"
                    },
                ],
                features : [
                    {
                        available : true,
                        name : "20,000 Channels",
                    },
                    {
                        available : true,
                        name : "Premium 4K, HD & SD channels",
                    },
                    {
                        available : true,
                        name : "Catch Up / EPG For All UK",
                    },
                    {
                        available : true,
                        name : "FREE Channels & VOD",
                    },
                    {
                        available : true,
                        name : "Format M3U & MAG & Enigma",
                    },
                    {
                        available : true,
                        name : "Guide TV (EPG)",
                    },
                    {
                        available : true,
                        name : "99.9% Server Uptime",
                    },
                    {
                        available : true,
                        name : "24/7 Dedicated Support",
                    },
                    {
                        available : true,
                        name : "AntiFreeze Tech",
                    },
                    {
                        available : true,
                        name : "over 100K Movies on Demand",
                    }
                ]
            },
            {
                connection : 4,
                id : 7,
                price : [
                    {
                        amount : 109,
                        currency : "USD",
                        symbol : "$",
                        url : "https://sowl.co/boUtDX"
                    },
                    {
                        amount : 109,
                        currency : "EUR",
                        symbol : "€",
                        url : "https://sowl.co/bfgQKe"
                    },
                    {
                        amount : 99,
                        currency : "POUNT",
                        symbol : "£",
                        url : "https://sowl.co/cYETP"
                    },
                ],
                features : [
                    {
                        available : true,
                        name : "20,000 Channels",
                    },
                    {
                        available : true,
                        name : "Premium 4K, HD & SD channels",
                    },
                    {
                        available : true,
                        name : "Catch Up / EPG For All UK",
                    },
                    {
                        available : true,
                        name : "FREE Channels & VOD",
                    },
                    {
                        available : true,
                        name : "Format M3U & MAG & Enigma",
                    },
                    {
                        available : true,
                        name : "Guide TV (EPG)",
                    },
                    {
                        available : true,
                        name : "99.9% Server Uptime",
                    },
                    {
                        available : true,
                        name : "24/7 Dedicated Support",
                    },
                    {
                        available : true,
                        name : "AntiFreeze Tech",
                    },
                    {
                        available : true,
                        name : "over 100K Movies on Demand",
                    }
                ]
            },
        ],
    },
]
const reviews = {
	en : [
			{
			  reviewer: "John ***",
			  reviewNumber: "#1234",
			  screen : "https://cdn.aurorafast.co.uk/images/none.png",
			  platform: "Google",
			  reviewText: "Great IPTV service! I've been enjoying a wide range of channels and excellent picture quality. Highly recommended.",
			  date: "2023-05-15"
			},
			{
			  reviewer: "Emily ***",
			  reviewNumber: "#5678",
			  screen : "https://cdn.aurorafast.co.uk/images/none.png",
			  platform: "Crisp Chat",
			  reviewText: "I'm impressed with this IPTV service. The channel selection is extensive, and the customer support team is responsive and helpful.",
			  date: "2023-05-22"
			},
			{
			  reviewer: "David ***",
			  reviewNumber: "#9012",
			  screen : "https://cdn.aurorafast.co.uk/images/none.png",
			  platform: "Google",
			  reviewText: "I've tried a few IPTV services, but this one stands out. The streaming is smooth, and the interface is user-friendly. Thumbs up!",
			  date: "2023-05-25"
			},
			{
			  reviewer: "Sarah ***",
			  reviewNumber: "#3456",
			  screen : "https://cdn.aurorafast.co.uk/images/none.png",
			  platform: "Crisp Chat",
			  reviewText: "This IPTV service is fantastic! The video-on-demand library is impressive, and the subscription plans are reasonably priced. Love it!",
			  date: "2023-05-20"
			},
			{
			  reviewer: "Michael ***",
			  reviewNumber: "#7890",
			  screen : "https://cdn.aurorafast.co.uk/images/none.png",
			  platform: "Google",
			  reviewText: "I've been a subscriber for a month now, and I'm delighted with this IPTV service. The channel quality is HD, and there's minimal buffering. Highly satisfied!",
			  date: "2023-05-18"
			},
			{
			  reviewer: "Jennifer ***",
			  reviewNumber: "#2345",
			  platform: "Crisp Chat",
			  screen : "https://cdn.aurorafast.co.uk/images/none.png",
			  reviewText: "I needed an IPTV service that supports multiple devices, and this one fits the bill perfectly. It works flawlessly on my Smart TV, smartphone, and tablet. Highly recommended!",
			  date: "2023-05-24"
			}
	],
	es : [
		  {
			reviewer: "John ***",
			reviewNumber: "#1234",
			screen: "https://cdn.aurorafast.co.uk/images/none.png",
			platform: "Google",
			reviewText: "¡Excelente servicio de IPTV! He estado disfrutando de una amplia variedad de canales y una excelente calidad de imagen. Muy recomendado.",
			date: "2023-05-15"
		  },
		  {
			reviewer: "Emily ***",
			reviewNumber: "#5678",
			screen: "https://cdn.aurorafast.co.uk/images/none.png",
			platform: "Crisp Chat",
			reviewText: "Me impresiona este servicio de IPTV. La selección de canales es extensa y el equipo de soporte al cliente es receptivo y útil.",
			date: "2023-05-22"
		  },
		  {
			reviewer: "David ***",
			reviewNumber: "#9012",
			screen: "https://cdn.aurorafast.co.uk/images/none.png",
			platform: "Google",
			reviewText: "He probado algunos servicios de IPTV, pero este se destaca. La transmisión es fluida y la interfaz es fácil de usar. ¡Aprobado!",
			date: "2023-05-25"
		  },
		  {
			reviewer: "Sarah ***",
			reviewNumber: "#3456",
			screen: "https://cdn.aurorafast.co.uk/images/none.png",
			platform: "Crisp Chat",
			reviewText: "¡Este servicio de IPTV es fantástico! La biblioteca de video on demand es impresionante y los planes de suscripción tienen precios razonables. ¡Me encanta!",
			date: "2023-05-20"
		  },
		  {
			reviewer: "Michael ***",
			reviewNumber: "#7890",
			screen: "https://cdn.aurorafast.co.uk/images/none.png",
			platform: "Google",
			reviewText: "Llevo un mes siendo suscriptor y estoy encantado con este servicio de IPTV. La calidad de los canales es HD y hay un mínimo de buffering. ¡Altamente satisfecho!",
			date: "2023-05-18"
		  },
		  {
			reviewer: "Jennifer ***",
			reviewNumber: "#2345",
			screen: "https://cdn.aurorafast.co.uk/images/none.png",
			platform: "Crisp Chat",
			reviewText: "Necesitaba un servicio de IPTV que admitiera múltiples dispositivos, y este se adapta perfectamente. Funciona perfectamente en mi Smart TV, teléfono inteligente y tableta. ¡Altamente recomendado!",
			date: "2023-05-24"
		  }
	]
};
module.exports={Dt,reviews,params,homeSplash}