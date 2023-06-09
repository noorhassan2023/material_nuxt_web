const metaData = {
  default: {
		title: {
		  ar: 'متيريال',
		  en: 'Material'
		},
		description: {
		ar: " توصيل المياه والمشروبات المحلية والمستوردة",
		en:"Local and imported beverages delivery ",
		},
		keywords: {
			ar: "متيريال, متجر متيريال, بيليني, المشروبات الغازية, مشروبات غازيه, مياه غازية, مياه معدنية, مياه نوفا 330 مل , مياه فوارة, مياه نوفا, سعر كرتون ماء, دبيبر, كرتون ماء, كرتون مويه, مويه نوفا قزاز, دبة موية, شركة مياه , مشروبات مستوردة, منتجات شبيريانى, مياه منكهه, مشروب غازى, مياة غازية بيريه, مشروب غازى ازرق"
			,en :"nova sparkling water , nova water 330ml, nova mineral water, nova water online order, order water bottle online, order soft drinks online, order bottled water online, order mineral water online, nova bottled water,buy sparkling water, buy soda online, buy soft drinks online, buy soft drinks online, buy bottled water online, best sparkling water, soda water, mineral water, mineral water, carbonated water, flavor water, black soft drink, sparkling water, nova water, soft drinks"
	},
		image: {
		ar: require('~/assets/img/Rectangle_51.png'),
		en: require('~/assets/img/Rectangle_51.png')
		}
	},
   aboutus: {
		title: {
		  ar: 'عن متيريال',
		  en: 'About Material'
		},
		description: {
			ar: " متيريال هي منصة مشروبات متعددة القنوات مقرها في المملكة العربية السعودية ، وهي متخصصة في تقديم مجموعة واسعة من مياة والمشروبات المحلية والمستوردة للمستهلكين والشركات بأسعار في متناول الجميع لتقديم أسهل حل لك ومشروبات تجيك لي مكانك. تتمثل رؤيتنا في أن نكون أسرع وافضل تطبيق توصيل في المنطقة لإرضاء عملائنا أولاً. مهمتنا هي خدمة المجتمعات من خلال فرق مدفوعة الغرض وممكنة ومبتكرة.",
			en: "Material is a Beverages Multichannel platform based in Saudi Arabia, specializing in offering wide range of local and imported beverages to consumers and businesses with an affordable price. We material are collaborating with extensive beverages companies to make the easiest beverage solution for you and for your suitable location. Our vision is to be the fastest and the largest delivery app in the region to satisfy our customer first. Our mission is to serve the communities through purpose-driven, empowered, and innovative teams. ",
		},
		keywords: {
			ar: "متيريال, متجر متيريال, بيليني, المشروبات الغازية, مشروبات غازيه, مياه غازية, مياه معدنية, مياه نوفا 330 مل , مياه فوارة, مياه نوفا, سعر كرتون ماء, دبيبر, كرتون ماء, كرتون مويه, مويه نوفا قزاز, دبة موية, شركة مياه , مشروبات مستوردة, منتجات شبيريانى, مياه منكهه, مشروب غازى, مياة غازية بيريه, مشروب غازى ازرق"
			,en :"nova sparkling water , nova water 330ml, nova mineral water, nova water online order, order water bottle online, order soft drinks online, order bottled water online, order mineral water online, nova bottled water,buy sparkling water, buy soda online, buy soft drinks online, buy soft drinks online, buy bottled water online, best sparkling water, soda water, mineral water, mineral water, carbonated water, flavor water, black soft drink, sparkling water, nova water, soft drinks"
	    },
		image: {
		ar: require('~/assets/img/Rectangle_51.png'),
		en: require('~/assets/img/Rectangle_51.png')
		}
  },
}

const getMeta = (key, lang) => {
  const lng = lang === 'ar' ? 'ar' : 'en'
  const data = metaData[key] ?? null
  const langData = {}
  Object.entries(data).forEach(([key, val]) => {
    langData[key] = val[lng]
  })
  return { ...langData }

}


const renderMeta = (key,lang) => {
	const data = getMeta(key, lang) ?? {}
  
  return {
    title: data.title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: data.description,
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: data.keywords,
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: data.image,
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: data.title,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: data.description,
      },
    ],
  }
}


export default { metaData ,renderMeta}
