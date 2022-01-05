const cardHtmlPage = (card, cardData) => {
  let output = card.replace(/{%PRODUCTNAME%}/g, cardData.productName)
  output=output.replace(/{%IMAGE%}/g,cardData.image)
  output=output.replace(/{%FROM%}/g,cardData.from)
  output=output.replace(/{%NUTRIENTS%}/g,cardData.nutrients)
  output=output.replace(/{%QUANTITY%}/g,cardData.quantity)
  output=output.replace(/{%PRICE%}/g,cardData.price)
  output = output.replace(/{%DESCRIPTION%}/g, cardData.description)
  output = output.replace(/{%ID%}/g, cardData.id)
  if(!cardData.organic)
    output = output.replace(/{%NON_ORGANIC%}/g, "not-organic")
  
  return output
  
}

module.exports= cardHtmlPage;