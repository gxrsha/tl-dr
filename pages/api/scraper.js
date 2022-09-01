import axios from "axios";
import JSSoup from "jssoup";


export default async (req, res) => {
  try {
    const topStories = [];
    const html = await getWebsiteData(req.query.url)

    const soup = new JSSoup(html)

    const articles = soup.findAll("h2", "c-entry-box--compact__title");
    const firstTenArticles = articles.slice(0, 10);
  
  
    firstTenArticles.forEach((article) => {
  
      const href = article.find('a')
  
      topStories.push({
        title: article.text,
        articleUrl: href.attrs.href,
      });
    });
  
    res.statusCode = 200
    return res.json({
      topStories
    });
  } catch (e) {
    res.statusCode = 404
    return res.json({
      error: `Nothing was found`
    })
  }
}

const getWebsiteData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};
