import axios from 'axios'
import JSSoup from "jssoup"

export default async (req, res) => {
    try {
        const articleText = []

        const html = await getWebsiteData(req.query.url)
        const soup = new JSSoup(html)
      
        const articleContent = soup.find('div', 'c-entry-content')
        const paragraphTags = articleContent.findAll('p')
      
        // Due to token limitations we only want the first 10 paragraphs
        const firstTenParagraphs = paragraphTags.slice(0, 10)
      
        firstTenParagraphs.forEach((paragraph) => {
          articleText.push(paragraph.text)
        })

        let concatArticleText = articleText.join(' ')
      
        res.statusCode = 200
        return res.json({
            concatArticleText
        })

    } catch (e) {
        res.statusCode = 400
        return res.json({
            error: `There was an error reading text from article: ${e}`
        })
    }
}

const getWebsiteData = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };
  
