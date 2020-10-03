
export const getArticle = (params) => {
  //params is "page" of article list on NEWSAPI 

  return `https://newsapi.org/v2/everything?q=covid&apiKey=4055e2c89faa40e384b1dd16c0daef44&page=${params}&pageSize=15`
}


//just for cosmetics
export const getAricle2 = {}
